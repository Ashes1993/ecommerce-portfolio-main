import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import { productList } from '../data'
import { AiOutlineArrowDown } from 'react-icons/ai'

export const Filter = () => {
  const { products, setProducts } = useGlobalContext()
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)
  const [isBrandOpen, setIsBrandOpen] = useState(false)

  const filterBrand = (selectedBrand) => {
    const newList = productList.filter(
      (product) => product.brand === selectedBrand
    )
    setProducts(newList)
  }

  const priceFilter = (from, to) => {
    const newList = products.filter(
      (item) => item.price >= from && item.price <= to
    )
    setProducts(newList)
  }

  const formHandler = (event) => {
    event.preventDefault()
    priceFilter(fromPrice, toPrice)
  }

  return (
    <div className='filter-container'>
      <h3>Categories</h3>
      <div>
        <h4
          onClick={() => setIsBrandOpen(!isBrandOpen)}
          className='filter-dropdown'
        >
          Laptop
          <AiOutlineArrowDown className='arrow-down-icon' />
        </h4>
        {isBrandOpen && (
          <ul className='brand-list'>
            <li>
              <button onClick={() => filterBrand('Acer')}>Acer</button>
            </li>
            <li>
              <button onClick={() => filterBrand('Asus')}>Asus</button>
            </li>
            <li>
              <button onClick={() => filterBrand('HP')}>HP</button>
            </li>
            <li>
              <button onClick={() => filterBrand('Jumper')}>Jumper</button>
            </li>
            <li>
              <button onClick={() => filterBrand('Lenovo')}>Lenovo</button>
            </li>
          </ul>
        )}
      </div>
      <div className='price-range'>
        <h4>Price</h4>
        <form className='price-form' onSubmit={formHandler}>
          <input
            type='number'
            placeholder='from'
            value={fromPrice}
            onChange={(event) => setFromPrice(event.target.value)}
          />
          <input
            type='number'
            placeholder='to'
            value={toPrice}
            onChange={(event) => setToPrice(event.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
