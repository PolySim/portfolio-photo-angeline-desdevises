import React from "react";

export type MainContextType = {
  setDisplayImage: React.Dispatch<React.SetStateAction<boolean>>;
  pagesInformation: [string, number, string][];
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
