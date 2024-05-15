const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export const update_title: (
  status: 0 | 1,
  reportId: string,
) => Promise<void> = async (status, reportId) => {
  try {
    const success = await fetch(`${API_KEY}/updateStatus/`, {
      method: "POST",
      body: JSON.stringify({ status, reportId: reportId }),
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
