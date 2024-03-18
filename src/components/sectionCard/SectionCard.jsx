"use client";
import React, { useState } from "react";
import Image from "next/image";

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="flex-shrink-0 w-40 sm:w-full relative "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="absolute top-0 right-0 flex flex-col gap-3 items-center p-2 sm:p-4 bg-opacity-80 rounded bg-white cursor-pointer">
            <Image
              src="/heart.svg"
              alt="wishlist icon"
              height={28}
              width={28}
            />

            <Image
              src="/serachIcon.svg"
              alt="search icon"
              height={28}
              width={28}
            />
            <Image src="/cart.svg" alt="cart icon" height={28} width={28} />
          </div>
        )}
        <img
          src="/p1.jpg"
          alt=""
          className="w-full object-cover mb-2 sm:mb-4"
        />
        <p className="font-bold text-sm sm:text-base capitalize">trim dress</p>
        <p className="text-sm sm:text-base">$200</p>
      </div>
    </>
  );
};

export default ProductCard;
