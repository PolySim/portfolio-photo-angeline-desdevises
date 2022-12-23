import React from "react";
import { MainContextType } from "src/type";

export const MainContext = React.createContext<MainContextType>({
  displayImage: false,
  setDisplayImage: () => {},
  pagesInformation: [],
  connected: false,
  setConnected: () => {},
});
