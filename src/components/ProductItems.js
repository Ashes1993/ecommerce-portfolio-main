import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { productList } from "../data";
import { Element } from "react-scroll";

const ProductCard = ({ id, brand, model, price, imgUrl }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { shopingCart, setShopingCart } = useGlobalContext();

  const addCart = (id) => {
    const newItem = productList.filter((product) => id === product.id);
    const isProductDuplicate = shopingCart.some((item) => item.id === id);

    if (!isProductDuplicate) {
      newItem[0].amount = 1;
      let newShopingCart = [...shopingCart, ...newItem];
      setShopingCart(newShopingCart);
    } else {
      newItem[0].amount = newItem[0].amount + 1;
      console.log(shopingCart);
      // const indexToReplace = shopingCart.findIndex(
      //   (item) => item.id === newItem.id
      // );
      // console.log(indexToReplace);
      // if (indexToReplace !== -1) {
      //   let newShopingCart = shopingCart.splice(indexToReplace, 1, newItem);
      //   setShopingCart(newShopingCart);
      //   console.log("item is duplicated!");
      // } else {
      //   console.log("Object not found in the list");
      // }
    }

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
    return;
  };
  return (
    <article className="laptop-item" key={id}>
      <img className="laptop-photo" src={imgUrl} alt="laptop" />
      <div className="laptop-details">
        <span className="laptop-brand">Brand: {brand}</span>
        <span className="laptop-model">Model: {model}</span>
        <p className="laptop-price">{price}$</p>
        <button className="add-cart" onClick={() => addCart(id)}>
          Add to Cart
        </button>
        {isAdded && (
          <p className="add-cart-success">Item added successfully!</p>
        )}
      </div>
    </article>
  );
};

export const ProductItems = () => {
  const { products, productError } = useGlobalContext();
  if (productError) {
    return (
      <div className="no-product">
        <h3>The search returned no result!</h3>
      </div>
    );
  }

  return (
    <Element name="laptops">
      <section className="products-items" id="laptops">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
    </Element>
  );
};
