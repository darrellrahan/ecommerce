"use client";

import React, { useRef } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { products } from "../data/data";
import ItemCard from "./ItemCard";

function Trending() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section id="trending">
      <div className="space-y-8">
        <div className="flex justify-between">
          <h1 className="text-2xl lg:text-3xl font-semibold">Trending Now</h1>
          <div className="flex items-center gap-2">
            <button
              className="bg-[#333] hover:bg-black transition-all duration-300 ease-linear text-white text-2xl p-2"
              onClick={() => {
                const slider = sliderRef.current;
                slider!.scrollLeft = slider!.scrollLeft - 250;
              }}
            >
              <HiOutlineArrowSmLeft />
            </button>
            <button
              className="bg-[#333] hover:bg-black transition-all duration-300 ease-linear text-white text-2xl p-2"
              onClick={() => {
                const slider = sliderRef.current;
                slider!.scrollLeft = slider!.scrollLeft + 250;
              }}
            >
              <HiOutlineArrowSmRight />
            </button>
          </div>
        </div>
        <div
          className="flex gap-4 overflow-x-auto scroll-smooth"
          ref={sliderRef}
        >
          {products
            .filter((data) => data.trending)
            .map((data) => (
              <ItemCard
                key={data.id}
                img={data.img.display}
                name={data.name}
                price={data.price}
                slider
                url={data.url}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;
