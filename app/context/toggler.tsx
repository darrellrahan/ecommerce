"use client";

import React, { useContext, useState, useEffect } from "react";

type TogglerContextType = {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglerContext = React.createContext<TogglerContextType>({
  mobileNavbar: false,
  setMobileNavbar: () => {},
  cart: false,
  setCart: () => {},
});

export const useTogglerContext = () => useContext(TogglerContext);

export const TogglerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [cart, setCart] = useState(false);

  useEffect(() => {
    document.body.style.overflow = cart || mobileNavbar ? "hidden" : "auto";
  }, [cart, mobileNavbar]);

  return (
    <TogglerContext.Provider
      value={{
        mobileNavbar,
        setMobileNavbar,
        cart,
        setCart,
      }}
    >
      {children}
    </TogglerContext.Provider>
  );
};
