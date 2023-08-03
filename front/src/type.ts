// import React from "react";

export type MainContextType = {
  reports: Reports;
};

export type Reports = Report[];

type Report = {
  index: number;
  title: string;
  article: string;
};
