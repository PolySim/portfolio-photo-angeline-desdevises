import { SmallImage } from "@/Components/Portfolio/styled.ts";
import { shortText } from "@/Components/Portfolio/shortText.ts";
import { getText } from "@/Components/Portfolio/getText.ts";
import React, { useContext, useRef, useState } from "react";
import { MainContext } from "@/context.ts";
import { useParams } from "react-router-dom";
import { FullScreenType } from "@/type.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export default function SmallImageComponent({
  image,
  setFullScreen,
  index,
}: {
  image: { id: number; description?: string | undefined };
  setFullScreen: React.Dispatch<React.SetStateAction<FullScreenType>>;
  index: number;
}): JSX.Element {
  const params = useParams();
  const portfolioId = params.id || "1";
  const { reports } = useContext(MainContext);
  const imageRef: React.MutableRefObject<HTMLImageElement | null> =
    useRef(null);
  const [ratio, setRatio] = useState(1);

  const calculRatio = () => {
    if (
      imageRef.current?.height &&
      imageRef.current?.width &&
      imageRef.current.height > imageRef.current.width
    ) {
      setRatio(2);
    } else {
      setRatio(1);
    }
  };

  return (
    <SmallImage
      onClick={() => setFullScreen({ imageClick: index, open: true })}
      style={{ gridRow: `span ${ratio} / span ${ratio}` }}
    >
      {image.id === -1 ? (
        <>
          <p>{shortText(getText(reports, parseInt(portfolioId)) || "")}</p>
          <p>READ MORE</p>
        </>
      ) : (
        <>
          <img
            onContextMenu={(e) => e.preventDefault()}
            loading="lazy"
            onLoad={calculRatio}
            src={`${API_KEY}/image/${image.id}`}
            alt={`image${image.id}`}
            ref={imageRef}
          />
          {portfolioId === "2" && image.description ? (
            <span>{image.description}</span>
          ) : (
            <></>
          )}
        </>
      )}
    </SmallImage>
  );
}
