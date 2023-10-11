const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export const update_description: (
  description: string,
  imageId: number,
) => Promise<void> = async (description, imageId) => {
  try {
    const success = await fetch(`${API_KEY}/updateDescription/`, {
      method: "POST",
      body: JSON.stringify({ description: description, imageId: imageId }),
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
