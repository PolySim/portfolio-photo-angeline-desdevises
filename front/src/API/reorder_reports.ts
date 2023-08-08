import { Reports } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export const reorder_reports: (reports: Reports) => Promise<void> = async (
  reports,
) => {
  try {
    const response = await fetch(`${API_KEY}/reports_order`, {
      method: "PUT",
      body: JSON.stringify({ reports: reports }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.status >= 400) {
      window.alert("error");
    } else {
      console.log(response.json());
    }
  } catch (error) {
    console.log(error);
  }
};
