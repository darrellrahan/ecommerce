"use client";

import React, { useContext, useState } from "react";

type TogglerContextType = {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};

const TogglerContext = React.createContext<TogglerContextType>({
  mobileNavbar: false,
  setMobileNavbar: () => {},
});

export const useTogglerContext = () => useContext(TogglerContext);

export const TogglerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  return (
    <TogglerContext.Provider
      value={{
        mobileNavbar,
        setMobileNavbar,
      }}
    >
      {children}
    </TogglerContext.Provider>
  );
};
