import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { shopingCart, isCartOpen, setIsCartOpen } = useGlobalContext()
  return (
    <div className='navbar'>
      <h3 className='navbar-header'>Online Shop</h3>
      <div className='shoping-cart' onClick={() => setIsCartOpen(!isCartOpen)}>
        <FaCartArrowDown className='cart-icon' />
        <span className='product-counter'>{shopingCart.length}</span>
      </div>
    </div>
  )
}

export default Navbar
