import { Reports } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export default async function getReportsInformation(): Promise<Reports> {
  const res = await fetch(`${API_KEY}/api/pages`);
  return (await res.json()) as Reports;
}
