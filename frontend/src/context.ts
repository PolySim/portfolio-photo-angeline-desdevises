import React from "react";
import { MainContextType } from "src/type";

export const MainContext = React.createContext<MainContextType>({
  setDisplayImage: () => {},
});
