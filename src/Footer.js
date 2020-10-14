import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__list">
        Get to Know Us
        <ul>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Tours</li>
        </ul>
      </div>

      <div className="footer__list">
        Make Money with Us
        <ul>
          <li>Sell products on Amazon</li>
          <li>Sell apps on Amazon</li>
          <li>Become an Affiliate</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hub</li>
        </ul>
      </div>

      <div className="footer__list">
        Amazon Payment Products
        <ul>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul>
      </div>

      <div className="footer__list">
        Let Us Help You
        <ul>
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>
            Shipping Rates & <br />
            Policies
          </li>
          <li>Amazon Prime</li>
          <li>
            Returns & <br />
            Replacements
          </li>
          <li>
            Manage Your Content <br /> and Devices
          </li>
          <li>Amazon Assistant</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
