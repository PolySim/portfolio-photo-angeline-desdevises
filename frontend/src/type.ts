import React from "react";

export type MainContextType = {
  setDisplayImage: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Style = {
  width: string;
  height: string;
};

export type BigImageProps = {
  id: number;
  display: number;
  setDisplay: React.Dispatch<React.SetStateAction<number>>;
};
