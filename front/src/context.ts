import React from "react";
import { MainContextType } from "@/type.ts";

export const MainContext = React.createContext<MainContextType>({
  reports: [
    {
      index: 0,
      title: "",
      article: "",
    },
  ],
  setReports: () => {},
});
