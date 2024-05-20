import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../context'
import { MdDelete } from 'react-icons/md'

const ShopingCart = () => {
  const { shopingCart, setShopingCart, isCartOpen } = useGlobalContext()
  const [totalPrice, setTotalPrice] = useState(0)

  const removeItem = (id) => {
    const newList = shopingCart.filter((item) => item.id !== id)
    setShopingCart(newList)
  }

  useEffect(() => {
    let total = 0
    shopingCart.forEach((item) => {
      total += parseInt(item.price)
    })
    setTotalPrice(total)
  }, [shopingCart])
  return (
    <div className={`cart-container ${isCartOpen ? 'show-cart' : ''}`}>
      {shopingCart.length === 0 && (
        <h2 className='no-item'>No item to show!</h2>
      )}
      {shopingCart.map((item) => {
        return (
          <div className='cart-item' key={item.id}>
            <img
              className='cart-item-image'
              src={item.imgUrl}
              alt={item.brand}
            />
            <h3>{item.brand}</h3>
            <h3>{item.model}</h3>
            <p>{item.price}</p>
            <button className='remove-btn' onClick={() => removeItem(item.id)}>
              <MdDelete className='delete-icon' />
            </button>
          </div>
        )
      })}
      <div className='price-container'>
        <h4 className='total-price'>Total: {totalPrice}$</h4>
      </div>
    </div>
  )
}

export default ShopingCart
