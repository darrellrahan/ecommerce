"use client";

import React from "react";
import { useTogglerContext } from "../context/toggler";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem";
import { useCartContext } from "../context/cart";
import Image from "next/image";

function Cart() {
  const { cartOpen, setCartOpen } = useTogglerContext();
  const { cart } = useCartContext();

  return (
    <div
      className={`fixed inset-y-0 right-0 z-[999] bg-black/70 ${
        cartOpen ? "left-0" : "left-[150%]"
      } transition-all duration-[0.5s] ease-linear`}
    >
      <div
        onClick={() => setCartOpen(false)}
        className="hidden lg:block absolute inset-y-0 left-0 right-[50%] z-[1000]"
      ></div>
      <div className="absolute bg-white inset-y-0 right-0 left-0 lg:left-[50%] p-6 flex flex-col justify-between gap-8 overflow-y-scroll z-[1000]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">
            Your Shopping Cart ({cart.length})
          </h1>
          <button onClick={() => setCartOpen(false)} className="text-[1.7rem]">
            <MdClose />
          </button>
        </div>
        {cart.length !== 0 ? (
          <>
            <div className="h-[30rem] overflow-y-scroll pr-4 space-y-6">
              {cart.map((data) => (
                <CartItem
                  key={data.product}
                  product={data.product}
                  img={data.img}
                  price={data.price}
                  amount={data.amount}
                />
              ))}
            </div>
            <div className="border-t-2 border-dashed border-black pt-2 space-y-6">
              <div className="text-2xl font-semibold flex items-center justify-between">
                <h1>Subtotal:</h1>
                <h1>
                  $
                  {cart.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.price * currentValue.amount,
                    0
                  )}
                </h1>
              </div>
              <div className="flex justify-center">
                <button className="bg-black text-white py-2 px-8 text-xl border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300 ease-linear">
                  Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col gap-8">
            <div className="space-y-4">
              <div>
                <Image
                  src="/images/cart/empty-cart.png"
                  alt="empty cart"
                  width={170}
                  height={170}
                />
              </div>
              <div>
                <h1 className="text-center font-semibold text-xl">
                  Your cart is empty
                </h1>
              </div>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="bg-[#e5e5e5] p-2 border border-black text-lg"
            >
              Keep Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
