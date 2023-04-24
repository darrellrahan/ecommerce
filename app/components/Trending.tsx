import React from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { products } from "../data/data";
import ItemCard from "./ItemCard";

function Trending() {
  return (
    <section id="trending">
      <div className="space-y-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Trending Now</h1>
          <div className="flex items-center gap-2">
            <button className="bg-black text-white text-2xl p-2">
              <HiOutlineArrowSmLeft />
            </button>
            <button className="bg-black text-white text-2xl p-2">
              <HiOutlineArrowSmRight />
            </button>
          </div>
        </div>
        <div className="flex items-stretch gap-8 overflow-x-scroll overflow-y-hidden scroll-smooth whitespace-nowrap">
          {products
            .filter((data) => data.trending)
            .map((data) => (
              <ItemCard
                key={data.id}
                img={data.img.display}
                name={data.name}
                price={data.price}
                slider
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;
