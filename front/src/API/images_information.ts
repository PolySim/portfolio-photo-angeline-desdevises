const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;
export default async function images_information(
  number: number,
): Promise<[number][]> {
  const res = await fetch(`${API_KEY}/api/images?num=${number}`);
  const data = await res.json();
  return data;
}
