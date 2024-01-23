const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export const update_biography: (biography: {
  biography_fr: string;
  biography_us: string;
}) => Promise<void> = async (biography) => {
  const success = await fetch(`${API_KEY}/update_biography`, {
    method: "POST",
    body: JSON.stringify(biography),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (success.status >= 400) throw new Error("Cannot update biography");
};
