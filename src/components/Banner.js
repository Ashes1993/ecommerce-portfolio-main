import React from "react";
import laptopBanner from "../images/laptop-banner.jpg";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="banner-container">
      <img className="laptop-banner" src={laptopBanner} alt="Laptop Banner" />
      <div className="banner-text-container">
        <h1 className="banner-text">Laptops for Every Lifestyle</h1>
        <Link
          className="banner-shop-btn"
          to="laptops"
          smooth={true}
          duration={300}
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
