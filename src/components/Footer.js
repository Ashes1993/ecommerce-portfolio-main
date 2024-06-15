import React from "react";
import "./Footer.css";
import { FaLaptop } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="about-site">
        <FaLaptop className="laptop-logo-footer" />
        <div className="about-site-info">
          <p>
            Circuit City: Your trusted tech partner since 2010. We've been
            helping people find the perfect laptops for their needs for over 14
            years.
          </p>
          <p className="about-number">
            +21 (0) 987654321
            <br />
            hello@domain.com
          </p>
        </div>
      </div>
      <div className="contact-us">
        <h1>Stay in the loop with our weekly newsletter</h1>
        <div className="input-container">
          <input type="email" placeholder="Enter your email!" />
          <button>
            <FaArrowRight className="arrow-class" />
          </button>
        </div>
        <div className="socials-container">
          <FaFacebook />
          <FaTwitter />
          <FaSquareInstagram />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
