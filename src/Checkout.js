import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="amazon ad"
            className="checkout__ad"
          />

          <div>
            <h3>Hello {!user ? "Guest" : user.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>

      <div className="checkout__left">
        {basket.length === 0 ? (
          <div className="empty__cart">
            <img
              src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
              alt="empty cart"
            />
            <h3>Your Amazon Cart is empty</h3>
          </div>
        ) : null}

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
