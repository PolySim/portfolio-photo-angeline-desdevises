import React, { RefObject } from "react";

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
  onToggleDisplay: (add: boolean) => void;
};
