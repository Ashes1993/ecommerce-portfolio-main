import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { productList } from "../data";
import { Element } from "react-scroll";

const ProductCard = ({ id, brand, model, price, imgUrl }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { shopingCart, setShopingCart } = useGlobalContext();
  const addCart = (id) => {
    const itemAdded = productList.filter((product) => id === product.id);
    const isProductDuplicate = shopingCart.some((item) => item.id === id);

    if (!isProductDuplicate) {
      let newShopingCart = [...shopingCart, ...itemAdded];
      setShopingCart(newShopingCart);
    } else {
      console.log("item is duplicated!");
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
