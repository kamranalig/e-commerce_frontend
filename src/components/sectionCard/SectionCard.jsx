"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ item }) => {
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
        <Link href={`/collections/${item.id}`}>
          <img
            src={item.imgSrc}
            alt={item.imgAlt}
            className="w-full object-cover mb-2 sm:mb-4"
          />
          <p className="font-bold text-sm sm:text-base capitalize">
            {item.title}
          </p>
          <p className="text-sm sm:text-base">${item.price}</p>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
