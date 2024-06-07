import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { productList } from "../data";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./Filter.css";
import ReactSlider from "react-slider";

export const Filter = () => {
  const { setProducts } = useGlobalContext();
  const [priceRange, setPriceRange] = useState([]);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  const filterBrand = (selectedBrand) => {
    const newList = productList.filter(
      (product) => product.brand === selectedBrand
    );
    setProducts(newList);
  };

  // const priceFilterHandler = (from, to) => {
  //   const newList = products.filter(
  //     (item) => item.price >= from && item.price <= to
  //   );
  //   setProducts(newList);
  // };

  // const formHandler = (event) => {
  //   event.preventDefault();
  //   priceFilter(fromPrice, toPrice);
  // };

  return (
    <aside className="filter-container">
      <h3>Filters</h3>
      <div>
        <h4
          onClick={() => setIsBrandOpen(!isBrandOpen)}
          className="filter-dropdown"
        >
          Brands
          <AiOutlineArrowDown className="arrow-down-icon" />
        </h4>
        {isBrandOpen && (
          <ul className="brand-list">
            <li>
              <button onClick={() => filterBrand("Acer")}>Acer</button>
            </li>
            <li>
              <button onClick={() => filterBrand("Asus")}>Asus</button>
            </li>
            <li>
              <button onClick={() => filterBrand("HP")}>HP</button>
            </li>
            <li>
              <button onClick={() => filterBrand("Jumper")}>Jumper</button>
            </li>
            <li>
              <button onClick={() => filterBrand("Lenovo")}>Lenovo</button>
            </li>
          </ul>
        )}
      </div>
      <div className="price-range-container">
        <h4>Price Range</h4>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[518, 1450]}
          min={518}
          max={1450}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
          onChange={(value) => {
            setPriceRange(value);
            const newList = productList.filter(
              (item) => item.price >= value[0] && item.price <= value[1]
            );
            setProducts(newList);
          }}
        />
        <span>
          {priceRange[0]} - {priceRange[1]}
        </span>
      </div>
    </aside>
  );
};
