const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

type Biography = {
  fr: string;
  en: string;
};

export const get_about = async () => {
  const res = await fetch(`${API_KEY}/api/about`);
  if (res.status >= 400) throw new Error("Cannot fetch biography");
  const data = (await res.json()) as Biography;
  if (!data) throw new Error("Cannot fetch categories");
  return data;
};
