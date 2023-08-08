import { Reports } from "@/type.ts";

export const reorderReports: (
  reports: Reports,
  source: number,
  destination: number | undefined,
) => Reports = (reports, source, destination) => {
  const reportChange = reports.find((_report, index) => index === source);
  if (destination === undefined || !reportChange) {
    return reports;
  }
  const reportsWithoutSource = reports.filter(
    (_report, index) => index !== source,
  );
  return reportsWithoutSource.reduce(
    (acc: Reports, curr, currentIndex) =>
      destination !== currentIndex + 1
        ? destination === 0 && currentIndex === 0
          ? [...acc, reportChange, curr]
          : [...acc, curr]
        : [...acc, curr, reportChange],
    [],
  );
};
