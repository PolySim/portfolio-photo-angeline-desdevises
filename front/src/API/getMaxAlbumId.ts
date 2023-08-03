const cleAPI = process.env.REACT_APP_API_URL;

export async function getMaxAlbumId(): Promise<number> {
  const res = await fetch(`${cleAPI}/maxIdAlbum`);
  const data = await res.json();
  return data[0];
}
