import { ReportType } from "@/model/reportModel.ts";
import { create } from "zustand";
import {
  createReport,
  deleteReport,
  findReport,
  findReports,
  updateReport,
} from "@/services/reportApi.ts";

type ReportStore = {
  reports: ReportType[];
  report: ReportType | null;
  initReports: () => void;
  initReport: (index: number) => void;
  createReport: (report: ReportType) => void;
  updateReport: (report: ReportType) => void;
  deleteReport: (index: number) => void;
};

export const useReport = create<ReportStore>()((set) => ({
  reports: [],
  report: null,
  initReports: async () => {
    await findReports().then((reports) => set({ reports }));
  },
  initReport: async (index: number) => {
    await findReport(index).then((report) => set({ report }));
  },
  createReport: async (report: ReportType) => {
    await createReport(report).then((report) =>
      set((state) => ({ reports: [...state.reports, report] })),
    );
  },
  updateReport: async (report: ReportType) => {
    await updateReport(report).then((report) =>
      set((state) => ({
        reports: state.reports.map((r) =>
          r.index === report.index ? report : r,
        ),
      })),
    );
  },
  deleteReport: async (index: number) => {
    await deleteReport(index).then(() =>
      set((state) => ({
        reports: state.reports.filter((report) => report.index !== index),
      })),
    );
  },
}));
