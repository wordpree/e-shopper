import React, { createContext, useContext } from "react";

interface ISProps {
  children: React.ReactNode;
}

const shopContext = createContext(null);

const ShopProvide = ({ children }: ISProps) => {
  return <shopContext.Provider value={null}>{children}</shopContext.Provider>;
};

export const useShopContext = () => useContext(shopContext);

export default ShopProvide;
