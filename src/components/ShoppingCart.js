import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { MdDelete } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { shoppingCart, setShoppingCart, isCartOpen, setIsCartOpen } =
    useGlobalContext();
  const [totalPrice, setTotalPrice] = useState(0);

  const removeItem = (id) => {
    const newList = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(newList);
  };

  useEffect(() => {
    let total = 0;
    shoppingCart.forEach((item) => {
      total += parseInt(item.price);
    });
    setTotalPrice(total);
  }, [shoppingCart]);
  return (
    <div className={`cart-container ${isCartOpen ? "show-cart" : ""}`}>
      <div className="cart-header">
        <h1>Cart</h1>
        <button className="close-btn" onClick={() => setIsCartOpen(false)}>
          <IoMdClose />
        </button>
      </div>

      {shoppingCart.length === 0 && (
        <div className="no-item">
          <GiShoppingCart className="no-item-icon" />
          <h2>Your Shopping Cart is Empty!</h2>
        </div>
      )}

      <div className="cart-items-container">
        {shoppingCart.map((item) => {
          return (
            <div className="cart-item" key={item.id}>
              <img
                className="cart-item-image"
                src={item.imgUrl}
                alt={item.brand}
              />
              <div className="cart-item-details">
                <h3>{item.brand}</h3>
                <p>{item.model}</p>
                <p>{item.price}</p>
              </div>
              <div className="cart-item-amount-delete">
                <input
                  className="cart-item-amount"
                  type="number"
                  value={item.amount}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <MdDelete className="delete-icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {shoppingCart.length !== 0 && (
        <div className="checkout-container">
          <div className="checkout-details">
            <p>Taxes included and shipping calculated at checkout.</p>
            <div className="price-container">
              <p>Subtotal</p>
              <p className="total-price">{totalPrice}$</p>
            </div>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
