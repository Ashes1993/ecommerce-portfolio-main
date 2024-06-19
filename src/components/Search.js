import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { productList } from "../data";
import "./Search.css";

export const Search = () => {
  const { setProducts, setProductError } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) {
      const newProducts = productList.filter((product) => {
        const brandMatch = product.brand
          .toLowerCase()
          .includes(inputValue.toLowerCase());
        const modelMatch = product.model
          .toLowerCase()
          .includes(inputValue.toLowerCase());
        return brandMatch || modelMatch;
      });
      setProducts(newProducts);
      if (newProducts.length === 0 && inputValue !== "") {
        setProductError(true);
      } else {
        setProductError(false);
      }
    } else {
      setProductError(false);
      setProducts(productList);
    }
  }, [inputValue, setProducts, setProductError]);

  return (
    <input
      placeholder="Search by Brand or Model"
      className="search-input"
      type="text"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};
