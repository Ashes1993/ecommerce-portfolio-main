import React from "react";
import { PiShoppingCart } from "react-icons/pi";
import { useGlobalContext } from "../context";
import laptopLogo from "../images/laptop-logo.jpg";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";

const Navbar = () => {
  const {
    shoppingCart,
    isCartOpen,
    setIsCartOpen,
    setIsBurgerMenu,
    isBurgerMenu,
  } = useGlobalContext();
  return (
    <header className="navbar">
      <a className="navbar-header" href="/">
        <img className="logo-image" src={laptopLogo} alt="laptop logo" />
      </a>
      <ul className={`navbar-buttons ${isBurgerMenu && "show"}`}>
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
      <button
        onClick={() => setIsBurgerMenu(!isBurgerMenu)}
        className="burger-btn"
      >
        <RxHamburgerMenu />
      </button>
      <div className="shopping-cart" onClick={() => setIsCartOpen(!isCartOpen)}>
        <PiShoppingCart className="cart-icon" />
        <span className="product-counter">{shoppingCart.length}</span>
      </div>
    </header>
  );
};

export default Navbar;
