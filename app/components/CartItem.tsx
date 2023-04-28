import Image from "next/image";
import React from "react";
import { BsTrash } from "react-icons/bs";

function CartItem() {
  return (
    <div className="border border-black flex">
      <div className="basis-1/4 flex items-center justify-center">
        <Image
          src="/images/products/furniture/shelf-black/display.jpg"
          alt="img"
          width={1000}
          height={1000}
        />
      </div>
      <div className="basis-3/4 p-4 bg-[#e5e5e5] flex justify-between gap-8">
        <div className="flex flex-col gap-4 justify-between">
          <div>
            <h1 className="text-xl">Gejst Shelf A Black Ash/Black</h1>
          </div>
          <div className="flex">
            <button className="bg-white w-6 h-6 flex items-center justify-center border-t border-l border-b border-black hover:bg-transparent transition-all duration-300 ease-linear text-xl">
              -
            </button>
            <p className="w-6 h-6 flex items-center justify-center border border-black text-center text-lg">
              1
            </p>
            <button className="bg-white w-6 h-6 flex items-center justify-center border-t border-r border-b border-black hover:bg-transparent transition-all duration-300 ease-linear text-xl">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div>
            <h1 className="text-xl font-semibold">$115</h1>
          </div>
          <div>
            <button className="text-2xl">
              <BsTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
