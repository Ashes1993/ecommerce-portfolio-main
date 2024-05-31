import React, { useState, useContext } from "react";
import { productList } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);
  const [productError, setProductError] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        productError,
        setProductError,
        shoppingCart,
        setShoppingCart,
        isCartOpen,
        setIsCartOpen,
        isBurgerMenu,
        setIsBurgerMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
