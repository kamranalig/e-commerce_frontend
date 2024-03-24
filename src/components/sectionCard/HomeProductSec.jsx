"use client";
import React, { useState } from "react";
import ProductCard from "./SectionCard";

const HomeCardsComponent = ({ products }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  let filteredProducts = [];
  if (products?.content) {
    filteredProducts = products?.content.filter((item) => {
      if (activeFilter === "All") return true;
      return item.pType === activeFilter;
    });
  }
  const currentProducts = filteredProducts.slice(0, 8);

  return (
    <>
      <ul className="flex justify-center md:gap-3 mb-6">
        {["All", "New Arrival", "Featured", "Special"].map((filter) => (
          <li
            key={filter}
            className={`px-2 md:px-6 uppercase md:text-lg cursor-pointer ${
              activeFilter === filter && "text-[#B0574F]"
            }`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
      <div className="flex gap-8 justify-center flex-wrap">
        {currentProducts &&
          currentProducts.map((item, index) => (
            <div className=" md:w-[260px]" key={index}>
              <ProductCard item={item} />
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeCardsComponent;
