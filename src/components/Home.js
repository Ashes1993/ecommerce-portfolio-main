import React from "react";
import Navbar from "./Navbar";
import { ProductItems } from "./ProductItems";
import { Search } from "./Search";
import { Filter } from "./Filter";
import ShoppingCart from "./ShoppingCart";
import Banner from "./Banner";
import About from "./About";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="page-container">
      <Navbar />
      <ShoppingCart />
      <Carousel />
      <About />
      <Banner />
      <div className="products-container">
        <Filter />
        <div className="products-and-search">
          <Search />
          <ProductItems />
        </div>
      </div>
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
