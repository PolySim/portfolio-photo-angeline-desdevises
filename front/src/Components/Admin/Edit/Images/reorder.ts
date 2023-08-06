import { ImagesID } from "@/type.ts";

export const reorderImages: (
  images: ImagesID,
  source: number,
  destination: number | undefined,
) => ImagesID = (images, source, destination) => {
  const imageChange = images.find((_image, i) => i === source) as {
    id: number;
  };
  const imagesWithoutSource = images.filter((image) => image !== imageChange);
  return imagesWithoutSource.reduce(
    (acc: ImagesID, curr, currentIndex) =>
      destination !== currentIndex + 1
        ? destination === 0 && currentIndex === 0
          ? [...acc, imageChange, curr]
          : [...acc, curr]
        : [...acc, curr, imageChange],
    [],
  );
};
