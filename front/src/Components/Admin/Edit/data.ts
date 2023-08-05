import { Reports } from "@/type.ts";

export const title: (reports: Reports, id: number) => string | undefined = (
  reports,
  id,
) => {
  const titles = [
    "",
    "portrais",
    "publications",
    "portfolio",
    reports.find((report) => report.index === id)?.title,
  ];

  return id === -1 ? "" : id > 3 ? titles[4] : titles[id];
};

export const article: (reports: Reports, id: number) => string | undefined = (
  reports,
  id,
) => {
  return id > 3 ? reports.find((report) => report.index === id)?.article : "";
};
