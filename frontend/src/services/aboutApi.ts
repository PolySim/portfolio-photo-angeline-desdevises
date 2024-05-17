import { get_api_key } from "@/get_api_key.ts";
import { AboutType } from "@/model/aboutModel.ts";

export const findAbout = async () => {
  const response = await fetch(`${get_api_key()}/api/about`, {
    method: "GET",
  });
  return (await response.json()) as AboutType;
};

export const updateAbout = async (about: AboutType) => {
  await fetch(`${get_api_key()}/api/about`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(about),
  });
};
