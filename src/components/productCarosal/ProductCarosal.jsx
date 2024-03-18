"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProductCard from "../sectionCard/SectionCard";
const ProductCarosal = () => {
  const responsive = {
    0: {
      items: 1,
    },
    720: {
      items: 3,
    },
    1024: {
      items: 5.5,
      itemsFit: "contain",
    },
  };

  const items = [
    <div className="item" data-value="1">
      <ProductCard />
    </div>,
    <div className="item" data-value="2">
      <ProductCard />
    </div>,
    <div className="item" data-value="3">
      <ProductCard />
    </div>,
    <div className="item" data-value="4">
      <ProductCard />
    </div>,
    <div className="item" data-value="5">
      <ProductCard />
    </div>,
    <div className="item" data-value="6">
      <ProductCard />
    </div>,
  ];
  return (
    <>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        responsive={responsive}
      />
    </>
  );
};

export default ProductCarosal;
