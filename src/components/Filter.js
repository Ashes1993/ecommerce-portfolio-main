import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { productList } from "../data";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./Filter.css";
import ReactSlider from "react-slider";

const BRANDS_LIST = ["Acer", "Asus", "HP", "Jumper", "Lenovo"];
const DEFAULT_PRICE_RANGE = [518, 1450];

export const Filter = () => {
  const { products, setProducts } = useGlobalContext();
  const [priceRange, setPriceRange] = useState([518, 1450]);
  const [selectedBrands, setSelectedBrands] = useState({
    Acer: false,
    Asus: false,
    HP: false,
    Jumper: false,
    Lenovo: false,
  });
  const [isBrandShow, setIsBrandShow] = useState(false);

  const submitFilters = () => {
    const selectedBrandNames = Object.entries(selectedBrands)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);

    const filteredProducts = products.filter((product) => {
      const brandMatch =
        selectedBrandNames.length === 0 ||
        selectedBrandNames.includes(product.brand);
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return brandMatch && priceMatch;
    });

    setProducts(filteredProducts);
  };

  const clearFilters = () => {
    setProducts(productList);
    setSelectedBrands({
      Acer: false,
      Asus: false,
      HP: false,
      Jumper: false,
      Lenovo: false,
    });
    setPriceRange(DEFAULT_PRICE_RANGE);
  };

  const handleBrandChange = (e) => {
    const brandName = e.target.name;
    const newSelectedBrands = {
      ...selectedBrands,
      [brandName]: !selectedBrands[brandName],
    };
    setSelectedBrands(newSelectedBrands);
  };

  return (
    <aside className="filter-container">
      <h1>Filters</h1>
      <div className="brands-container">
        <h4
          onClick={() => setIsBrandShow(!isBrandShow)}
          className="brands-title"
        >
          Brands
          <IoIosArrowDropdownCircle className="arrow-down-icon" />
        </h4>
        <ul className={`brands-list ${isBrandShow && "show"}`}>
          {BRANDS_LIST.map((brand, index) => {
            return (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    name={brand}
                    checked={selectedBrands[brand]}
                    onChange={handleBrandChange}
                  />
                  {brand}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="price-range-container">
        <h4>Price Range</h4>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[518, 1450]}
          value={priceRange}
          min={518}
          max={1450}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          pearling
          minDistance={10}
          onChange={(value) => {
            setPriceRange(value);
          }}
        />
        <span className="price-range">
          ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>
      <div className="filter-btns">
        <button className="apply-btn" onClick={submitFilters}>
          Apply Filters
        </button>
        <button onClick={clearFilters} className="clear-btn">
          Clear Filters
        </button>
      </div>
    </aside>
  );
};
