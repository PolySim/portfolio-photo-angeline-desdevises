const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export const delete_report: (report_id: number) => void = async (report_id) => {
  try {
    const response = await fetch(`${API_KEY}/delete_report`, {
      method: "POST",
      body: JSON.stringify({ report_id: report_id }),
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
