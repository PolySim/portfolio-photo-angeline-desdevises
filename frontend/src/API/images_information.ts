const cleAPI = process.env.REACT_APP_API_URL;

export default async function images_information(
  number: number
): Promise<[number, number][]> {
  const res = await fetch(`${cleAPI}/api/images?num=${number}`);
  const data = await res.json();
  return data;
}
