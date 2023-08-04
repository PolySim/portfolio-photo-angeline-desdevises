import { ImagesID } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;
export default async function images_information(
  number: string,
): Promise<ImagesID> {
  const res = await fetch(`${API_KEY}/api/images?num=${number}`);
  const data = (await res.json()) as [number][];
  return convertData(data);
}

const convertData: (values: [number][]) => ImagesID = (values) => {
  const data: ImagesID = values.map((value) => ({
    id: value[0],
  }));
  return data;
};
