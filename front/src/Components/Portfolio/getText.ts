import { Reports } from "@/type.ts";

export const getText: (reports: Reports, index: number) => string | null = (
  reports,
  index,
) => {
  const report = reports.find((report) => report.index === index);
  return report ? report.article : null;
};
