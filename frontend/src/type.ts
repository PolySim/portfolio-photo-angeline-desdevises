import React from "react";

export type MainContextType = {
  setDisplayImage: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Style = {
  width: string;
  height: string;
};
