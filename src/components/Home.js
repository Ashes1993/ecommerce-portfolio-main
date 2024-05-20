import React from 'react'
import Navbar from './Navbar'
import ImageSlider from './ImageSlider'
import { ProductItems } from './ProductItems'
import { Search } from './Search'
import { Filter } from './Filter'
import ShopingCart from './ShopingCart'

const Home = () => {
  return (
    <div className='page-container'>
      <Navbar />
      <ShopingCart />
      <ImageSlider />
      <div className='products-container'>
        <Filter />
        <Search />
        <ProductItems />
      </div>
    </div>
  )
}

export default Home
