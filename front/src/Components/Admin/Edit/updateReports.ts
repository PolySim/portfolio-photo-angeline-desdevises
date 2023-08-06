import { AdminFormType, Reports } from "@/type.ts";

export const updateReports: (
  reports: Reports,
  data: AdminFormType,
  reportID: number,
) => Reports = (reports, data, reportID) => {
  if (reportID > 3) {
    return reports.map((report) =>
      report.index === reportID ? { ...data, index: reportID } : report,
    );
  } else {
    return reports;
  }
};
