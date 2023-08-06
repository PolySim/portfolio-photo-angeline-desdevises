const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export const delete_image: (
  image_id: number,
  report_id: number,
) => void = async (image_id, report_id) => {
  try {
    const response = await fetch(`${API_KEY}/delete_image`, {
      method: "POST",
      body: JSON.stringify({ image_id: image_id, report_id: report_id }),
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
    console.error(error);
  }
};
