"use client";

import React, { useContext, useState, useEffect } from "react";

type TogglerContextType = {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglerContext = React.createContext<TogglerContextType>({
  mobileNavbar: false,
  setMobileNavbar: () => {},
  cartOpen: false,
  setCartOpen: () => {},
});

export const useTogglerContext = () => useContext(TogglerContext);

export const TogglerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = cartOpen || mobileNavbar ? "hidden" : "auto";
  }, [cartOpen, mobileNavbar]);

  return (
    <TogglerContext.Provider
      value={{
        mobileNavbar,
        setMobileNavbar,
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </TogglerContext.Provider>
  );
};
