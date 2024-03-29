import React from "react";

export type MainContextType = {
  reports: Reports;
  setReports: React.Dispatch<React.SetStateAction<Reports>>;
};

export type Reports = Report[];

type Report = {
  index: number;
  title: string;
  article: string;
};

export type ImagesID = {
  id: number;
  description?: string;
}[];

export type FullScreenType = {
  open: boolean;
  imageClick: number;
};

export type HandleScroll = (
  element: HTMLElement | null,
  add: boolean,
  step: number,
) => void;

export type AdminFormType = {
  title: string;
  article: string;
};

export type AdminAboutFormType = {
  biography_fr: string;
  biography_us: string;
};
