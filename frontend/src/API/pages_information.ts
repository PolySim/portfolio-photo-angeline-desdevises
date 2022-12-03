const cleAPI = process.env.REACT_APP_API_URL;

export default async function pages_information(): Promise<
  [string, number, string][]
> {
  const res = await fetch(`${cleAPI}/api/pages`);
  const data = await res.json();
  return data;
}
