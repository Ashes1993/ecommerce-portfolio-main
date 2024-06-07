import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { productList } from "../data";
import { Element } from "react-scroll";
import "./ProductItems.css";

const ProductCard = ({ id, brand, model, price, imgUrl }) => {
  const [isAdded, setIsAdded] = useState(false);
  const { shoppingCart, setShoppingCart } = useGlobalContext();

  const addCart = (id) => {
    const newItem = productList.filter((product) => id === product.id);
    const isProductDuplicate = shoppingCart.some((item) => item.id === id);

    if (!isProductDuplicate) {
      newItem[0].amount = 1;
      let newShoppingCart = [...shoppingCart, ...newItem];
      setShoppingCart(newShoppingCart);
    } else {
      const existingProduct = shoppingCart.find((item) => item.id === id);

      setShoppingCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id
            ? { ...existingProduct, amount: existingProduct.amount + 1 }
            : item
        )
      );
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
        <button
          className={`add-cart ${isAdded && "added"}`}
          onClick={() => addCart(id)}
        >
          {!isAdded ? "Add to Cart" : "Added"}
        </button>
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
