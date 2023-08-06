import { AdminFormType } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export const create_report: (data: AdminFormType) => Promise<{
  report_id: string;
}> = async (data) => {
  try {
    const response = await fetch(`${API_KEY}/create_report`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.status >= 400) {
      window.alert("error");
      return { report_id: "-1" };
    } else {
      return (await response.json()) as { report_id: string };
    }
  } catch (error) {
    console.log(error);
    return { report_id: "-1" };
  }
};
