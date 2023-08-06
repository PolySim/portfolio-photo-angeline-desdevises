import { ImagesID } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;
export default async function images_information(
  number: string,
): Promise<ImagesID> {
  const res = await fetch(`${API_KEY}/api/images?num=${number}`);
  return (await res.json()) as ImagesID;
}
