import React from 'react'
import { useGlobalContext } from '../context'
import { productList } from '../data'

export const ProductItems = () => {
  const { products, productError, shopingCart, setShopingCart } =
    useGlobalContext()

  const addCart = (id) => {
    const itemAdded = productList.filter((product) => id === product.id)
    let newShopingCart = [...shopingCart, ...itemAdded]
    setShopingCart(newShopingCart)
  }

  if (productError) {
    return (
      <div className='no-product'>
        <h3>The search returned no result!</h3>
      </div>
    )
  }

  return (
    <div className='products-items'>
      {products.map((product) => {
        return (
          <div className='laptop-item' key={product.id}>
            <img className='laptop-photo' src={product.imgUrl} alt='laptop' />
            <div className='laptop-details'>
              <span className='laptop-brand'>Brand: {product.brand}</span>
              <span className='laptop-model'>Model: {product.model}</span>
              <p className='laptop-price'>{product.price}$</p>
              <button className='add-cart' onClick={() => addCart(product.id)}>
                Add to Cart
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
