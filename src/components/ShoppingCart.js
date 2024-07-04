import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { MdDelete } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./ShoppingCart.css";
import SuccessMessage from "./SuccessMessage";

const ShoppingCart = () => {
  const { shoppingCart, setShoppingCart, isCartOpen, setIsCartOpen } =
    useGlobalContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  /* This functions takes the product's ID and add it to shoping cart list */

  const removeItem = (id) => {
    const productIndex = shoppingCart.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
      const updatedCart = shoppingCart.map((item, index) => {
        if (index === productIndex) {
          return item.amount > 1 ? { ...item, amount: item.amount - 1 } : null;
        }
        return item;
      });
      const filteredCart = updatedCart.filter((item) => item !== null);
      setShoppingCart(filteredCart);
    }
  };

  useEffect(() => {
    let total = 0;
    shoppingCart.forEach((item) => {
      total += item.amount * item.price;
    });
    const fixedTotal = total.toFixed(2);
    setTotalPrice(fixedTotal);
  }, [shoppingCart]);

  return (
    <>
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
                  <span className="cart-item-amount">{item.amount}</span>
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
            <button
              onClick={() => setIsSuccessMessage(true)}
              className="checkout-btn"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
      {isSuccessMessage && (
        <SuccessMessage
          message="Thank you for your purchase. Your order has been submitted!"
          setIsSuccessMessage={setIsSuccessMessage}
        />
      )}
    </>
  );
};

export default ShoppingCart;
