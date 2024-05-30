import React from "react";
import Navbar from "./Navbar";
import { ProductItems } from "./ProductItems";
import { Search } from "./Search";
import { Filter } from "./Filter";
import ShopingCart from "./ShopingCart";
import Banner from "./Banner";
import About from "./About";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="page-container">
      <Navbar />
      <ShopingCart />
      <Carousel />
      <About />
      {/* <Banner /> */}
      <div className="products-container">
        <Filter />
        <Search />
        <ProductItems />
      </div>
    </div>
  );
};

export default Home;
