import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { MdDelete } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const ShopingCart = () => {
  const { shopingCart, setShopingCart, isCartOpen, setIsCartOpen } =
    useGlobalContext();
  const [totalPrice, setTotalPrice] = useState(0);

  const removeItem = (id) => {
    const newList = shopingCart.filter((item) => item.id !== id);
    setShopingCart(newList);
  };

  useEffect(() => {
    let total = 0;
    shopingCart.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotalPrice(total);
  }, [shopingCart]);
  return (
    <div className={`cart-container ${isCartOpen ? "show-cart" : ""}`}>
      <button className="close-btn" onClick={() => setIsCartOpen(false)}>
        <IoMdClose />
      </button>
      {shopingCart.length === 0 && (
        <div className="no-item">
          <GiShoppingCart className="no-item-icon" />
          <h2>Your Shoping Cart is Empty!</h2>
        </div>
      )}
      {shopingCart.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <img
              className="cart-item-image"
              src={item.imgUrl}
              alt={item.brand}
            />
            <h3>{item.brand}</h3>
            <h3>{item.model}</h3>
            <p>{item.price}</p>
            <span>{item.amount}</span>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              <MdDelete className="delete-icon" />
            </button>
          </div>
        );
      })}
      {shopingCart.length !== 0 && (
        <div className="price-container">
          <h4 className="total-price">Total: {totalPrice}$</h4>
        </div>
      )}
    </div>
  );
};

export default ShopingCart;
