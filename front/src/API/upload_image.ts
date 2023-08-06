const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export const upload_images: (
  formData: FormData,
  reportId: number,
) => void = async (formData, reportId) => {
  try {
    const response = await fetch(`${API_KEY}/upload_images/${reportId}`, {
      method: "POST",
      body: formData,
    });
    if (response.status >= 400) {
      window.alert("error");
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
};
