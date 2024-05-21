import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useGlobalContext } from "../context";
import laptopLogo from "../images/laptop-logo.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const { shopingCart, isCartOpen, setIsCartOpen } = useGlobalContext();
  return (
    <header className="navbar">
      <a className="navbar-header" href="/">
        <img className="logo-image" src={laptopLogo} alt="laptop logo" />
      </a>
      <ul className="navbar-buttons">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="laptops" smooth={true} duration={300}>
            Laptops
          </Link>
        </li>
        <li>
          <Link to="contact-us" smooth={true} duration={300}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="shoping-cart" onClick={() => setIsCartOpen(!isCartOpen)}>
        <FaCartArrowDown className="cart-icon" />
        <span className="product-counter">{shopingCart.length}</span>
      </div>
    </header>
  );
};

export default Navbar;
