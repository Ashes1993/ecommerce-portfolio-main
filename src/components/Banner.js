import React from "react";
import laptopBanner from "../images/laptop-banner.jpg";

const Banner = () => {
  return (
    <section className="banner-container">
      <img className="laptop-banner" src={laptopBanner} alt="Laptop Banner" />
      <h1 className="banner-text">Laptops for Every Lifestyle</h1>
    </section>
  );
};

export default Banner;
