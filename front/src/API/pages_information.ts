import { Reports } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export default async function getReportsInformation(): Promise<Reports> {
  const res = await fetch(`${API_KEY}/api/pages`);
  const data = (await res.json()) as [number, string, string][];
  return changeValue(data);
}

const changeValue: (values: [number, string, string][]) => Reports = (
  values,
) => {
  const result: Reports = values.map((value) => ({
    index: value[0],
    title: value[1],
    article: value[2],
  }));
  return result;
};
