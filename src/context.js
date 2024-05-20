import React, { useState, useContext } from 'react'
import { productList } from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(productList)
  const [productError, setProductError] = useState(false)
  const [shopingCart, setShopingCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        productError,
        setProductError,
        shopingCart,
        setShopingCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
