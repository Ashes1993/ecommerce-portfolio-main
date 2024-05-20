import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'
import { productList } from '../data'

export const Search = () => {
  const { setProducts, setProductError } = useGlobalContext()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (inputValue) {
      const newProducts = productList.filter((product) =>
        product.brand.toLowerCase().includes(inputValue.toLowerCase())
      )
      setProducts(newProducts)
      if (newProducts.length === 0 && inputValue !== '') {
        setProductError(true)
      } else {
        setProductError(false)
      }
    } else {
      setProductError(false)
      setProducts(productList)
    }
  }, [inputValue])

  return (
    <div className='search-container'>
      <input
        placeholder='Search by Brand Name'
        className='search-input'
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  )
}
