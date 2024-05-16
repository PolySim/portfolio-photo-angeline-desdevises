export const get_api_key = () => {
  return import.meta.env.PROD
    ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
    : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;
};
