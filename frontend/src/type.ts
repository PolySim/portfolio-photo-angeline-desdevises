import React from "react";

export type MainContextType = {
  displayImage: boolean;
  setDisplayImage: React.Dispatch<React.SetStateAction<boolean>>;
  pagesInformation: [number, string, string][];
  connected: boolean;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Style = {
  width: string;
  height: string;
};

export type BigImageProps = {
  id: number;
  display: number;
  onToggleDisplay: (add: boolean) => void;
  listImages: number[];
  text: string;
};

export type AdminImagesType = {
  title: string;
  content: string | null;
  images: number[];
};
