import Image from "next/image";
import React from "react";
import { BsTrash } from "react-icons/bs";

function CartItem() {
  return (
    <div className="border border-black w-60 m-auto">
      <div>
        <Image
          src="/images/products/furniture/shelf-black/display.jpg"
          alt="img"
          width={1000}
          height={1000}
        />
      </div>
      <div className="p-4 bg-[#e5e5e5] space-y-6">
        <div>
          <h1 className="text-xl">Gejst Shelf A Black Ash/Black</h1>
        </div>
        <div className="flex justify-center">
          <button className="bg-white w-8 h-8 flex items-center justify-center border-t border-l border-b border-black hover:bg-transparent transition-all duration-300 ease-linear text-2xl">
            -
          </button>
          <p className="w-8 h-8 flex items-center justify-center border border-black text-center text-xl">
            1
          </p>
          <button className="bg-white w-8 h-8 flex items-center justify-center border-t border-r border-b border-black hover:bg-transparent transition-all duration-300 ease-linear text-2xl">
            +
          </button>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">$115</h1>
          <button className="text-2xl">
            <BsTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
