import { AdminFormType } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export const update_title: (
  data: AdminFormType,
  reportId: string,
) => Promise<void> = async (data, reportId) => {
  try {
    const success = await fetch(`${API_KEY}/updateTitle/`, {
      method: "POST",
      body: JSON.stringify({ ...data, reportId: reportId }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (success.status >= 400) {
      window.alert("error");
    } else {
      window.alert("success");
    }
  } catch (error) {
    console.error(error);
  }
};
