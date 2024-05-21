import React from "react";
import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import { ProductItems } from "./ProductItems";
import { Search } from "./Search";
import { Filter } from "./Filter";
import ShopingCart from "./ShopingCart";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="page-container">
      <Navbar />
      <ShopingCart />
      <Banner />
      <ImageSlider />
      <div className="products-container">
        <Filter />
        <Search />
        <ProductItems />
      </div>
    </div>
  );
};

export default Home;
