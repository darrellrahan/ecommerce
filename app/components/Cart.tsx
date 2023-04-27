"use client";

import React from "react";
import { useTogglerContext } from "../context/toggler";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem";

function Cart() {
  const { cart, setCart } = useTogglerContext();

  return (
    <div
      className={`fixed inset-y-0 right-0 bg-white ${
        cart ? "left-0" : "left-[150%]"
      } z-50 transition-all duration-300 ease-linear p-6 flex flex-col justify-between gap-8 overflow-y-scroll`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Your Shopping Cart (1)</h1>
        <button onClick={() => setCart(false)} className="text-[1.7rem]">
          <MdClose />
        </button>
      </div>
      <div className="h-[30rem] overflow-y-scroll space-y-6">
        <CartItem />
        <CartItem />
      </div>
      <div className="border-t-2 border-dashed border-black pt-2 space-y-6">
        <div className="text-2xl font-semibold flex items-center justify-between">
          <h1>Subtotal:</h1>
          <h1>$276</h1>
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white py-2 px-8 text-xl border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 ease-linear">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
