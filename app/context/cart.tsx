"use client";

import React, { useContext, useState } from "react";

type CartContextType = {
  cart: {
    product: string;
    img: string;
    price: number;
    amount: number;
  }[];
  setCart: React.Dispatch<
    React.SetStateAction<
      {
        product: string;
        img: string;
        price: number;
        amount: number;
      }[]
    >
  >;
};

const CartContext = React.createContext<CartContextType>({
  cart: [],
  setCart() {},
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<
    {
      product: string;
      img: string;
      price: number;
      amount: number;
    }[]
  >([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
