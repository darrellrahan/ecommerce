"use client";

import Image from "next/image";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { useCartContext } from "../context/cart";

function CartItem({
  product,
  img,
  price,
  amount,
}: {
  product: string;
  img: string;
  price: number;
  amount: number;
}) {
  const { cart, setCart } = useCartContext();

  return (
    <div className="border border-black flex">
      <div className="basis-1/4 lg:basis-1/6 flex items-center justify-center">
        <Image
          src={img}
          alt="img"
          width={1000}
          height={1000}
          className="w-full lg:w-28"
        />
      </div>
      <div className="basis-3/4 lg:basis-5/6 p-4 bg-[#e5e5e5] flex justify-between gap-8">
        <div className="flex flex-col gap-4 justify-between">
          <div>
            <h1 className="text-xl">{product}</h1>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                if (cart.find((data) => data.product === product)!.amount > 1) {
                  const newAmount = cart.map((data) =>
                    data.product === product
                      ? { ...data, amount: data.amount - 1 }
                      : data
                  );
                  setCart(newAmount);
                }
              }}
              className="bg-white w-6 h-6 flex items-center justify-center border-t border-l border-b border-black hover:bg-transparent transition-all duration-300 ease-linear text-xl"
            >
              -
            </button>
            <p className="w-6 h-6 flex items-center justify-center border border-black text-center text-lg">
              {amount}
            </p>
            <button
              onClick={() => {
                const newAmount = cart.map((data) =>
                  data.product === product
                    ? { ...data, amount: data.amount + 1 }
                    : data
                );
                setCart(newAmount);
              }}
              className="bg-white w-6 h-6 flex items-center justify-center border-t border-r border-b border-black hover:bg-transparent transition-all duration-300 ease-linear text-xl"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div>
            <h1 className="text-xl font-semibold">${price * amount}</h1>
          </div>
          <div>
            <button
              onClick={() => {
                const newCart = cart.filter((data) => data.product !== product);
                setCart(newCart);
              }}
              className="text-2xl"
            >
              <BsTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
