import { FullImage, FullScreenStyle } from "@/Components/Portfolio/styled.ts";
import { FullScreenType, HandleScroll, ImagesID } from "@/type.ts";
import React, { useEffect, useRef } from "react";
import Cross from "@/Components/Portfolio/FullScreen/cross.tsx";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export default function Index({
  images,
  text,
  fullScreen,
  setFullScreen,
}: {
  images: ImagesID;
  text: string | null;
  fullScreen: FullScreenType;
  setFullScreen: React.Dispatch<React.SetStateAction<FullScreenType>>;
}): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll: HandleScroll = (element, add, step) => {
    if (element) {
      add
        ? (element.scrollLeft += step * window.innerWidth)
        : (element.scrollLeft -= step * window.innerWidth);
    }
  };

  useEffect(() => {
    handleScroll(containerRef.current, true, fullScreen.imageClick);
  });

  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          setFullScreen((curr) => ({ ...curr, open: false }));
          break;
        case "ArrowLeft":
          handleScroll(containerRef.current, false, 1);
          break;
        case "ArrowRight":
          handleScroll(containerRef.current, true, 1);
          break;
      }
    };

    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  }, []);

  return (
    <FullScreenStyle ref={containerRef}>
      <Cross setFullScreen={setFullScreen} />
      {images.map((image, i) => (
        <FullImage
          key={i}
          onClick={() => setFullScreen((curr) => ({ ...curr, open: false }))}
        >
          {text && i === 1 ? (
            <p>{text}</p>
          ) : (
            <img
              onContextMenu={(e) => e.preventDefault()}
              src={`${API_KEY}/image/${image.id}`}
              alt={`image${image.id}`}
            />
          )}
        </FullImage>
      ))}
    </FullScreenStyle>
  );
}
