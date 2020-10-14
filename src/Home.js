import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "./Slider";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Slider />

        <div className="home__row">
          <Product
            id="1599959740"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={13.31}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={4}
          />

          <Product
            id="1599960118"
            title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers "
            price={343.61}
            image="https://m.media-amazon.com/images/I/716pgZxRYhL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1599960282"
            title="PlayStation 4 Slim 1TB Console "
            price={44.98}
            image="https://images-na.ssl-images-amazon.com/images/I/71PGvPXpk5L._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="1599960282"
            title="Casio Men's MDV106-1AV 200M Duro Analog Watch, Black"
            price={57.95}
            image="https://images-na.ssl-images-amazon.com/images/I/51eHnJL9S7L._AC_US218_.jpg"
            rating={3}
          />
          <Product
            id="1599960245"
            title="Oculus Rift S PC-Powered VR Gaming Headset "
            price={399.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71byGcUN9iL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="1599968420"
            title="LG 34GK950F-B 34 21:9 Ultragear WQHD Nano IPS Curved Gaming Monitor with Radeon FreeSync 2, Black "
            price={899.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61%2BAVPOoyML._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
