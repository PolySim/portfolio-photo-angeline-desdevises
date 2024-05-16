import { get_api_key } from "@/get_api_key.ts";
import { ReportType } from "@/model/reportModel.ts";

export const findReports = async () => {
  const response = await fetch(`${get_api_key()}/api/pages`, {
    method: "GET",
  });
  return (await response.json()) as ReportType[];
};

export const findReport = async (index: number) => {
  const response = await fetch(`${get_api_key()}/api/pages/${index}`, {
    method: "GET",
  });
  return (await response.json()) as ReportType;
};

export const createReport = async (report: ReportType) => {
  const response = await fetch(`${get_api_key()}/api/pages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  });
  return await response.json();
};

export const updateReport = async (report: ReportType) => {
  const response = await fetch(`${get_api_key()}/api/pages/${report.index}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  });
  return await response.json();
};

export const deleteReport = async (index: number) => {
  const response = await fetch(`${get_api_key()}/api/pages/${index}`, {
    method: "DELETE",
  });
  return await response.json();
};
