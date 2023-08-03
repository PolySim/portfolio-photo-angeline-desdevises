import React from "react";
import { AdminImagesType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default async function getAdminListImage(
  id: string
): Promise<AdminImagesType> {
  const res = await fetch(`${cleAPI}/admin/listImage/${id}`);
  const data = await res.json();
  return data;
}
