import { PortfolioStyle, SmallImage } from "@/Components/Portfolio/styled.ts";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "@/context.ts";
import { FullScreenType, ImagesID } from "@/type.ts";
import images_information from "@/API/images_information.ts";
import { getText } from "@/Components/Portfolio/getText.ts";
import { shortText } from "@/Components/Portfolio/shortText.ts";
import Index from "@/Components/Portfolio/FullScreen";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export default function Portfolio(): JSX.Element {
  const [images, setImages] = useState<ImagesID>([]);
  const [fullScreen, setFullScreen] = useState<FullScreenType>({
    open: false,
    imageClick: -1,
  });

  const { reports } = useContext(MainContext);
  const params = useParams();
  const portfolioId = params.id || "1";

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await images_information(portfolioId);
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    };
    void getData();
  }, [portfolioId]);

  return (
    <PortfolioStyle>
      {fullScreen.open ? (
        <Index
          images={images.reduce(
            (acc: ImagesID, curr, currentIndex) =>
              currentIndex === 0 && getText(reports, parseInt(portfolioId))
                ? [...acc, curr, { id: -1 }]
                : [...acc, curr],
            [],
          )}
          text={getText(reports, parseInt(portfolioId))}
          fullScreen={fullScreen}
          setFullScreen={setFullScreen}
        />
      ) : (
        <></>
      )}

      {images
        .reduce(
          (acc: ImagesID, curr, currentIndex) =>
            currentIndex === 0 && getText(reports, parseInt(portfolioId))
              ? [...acc, curr, { id: -1 }]
              : [...acc, curr],
          [],
        )
        .map((image, i) => (
          <SmallImage
            onClick={() => setFullScreen({ imageClick: i, open: true })}
            key={image.id}
          >
            {image.id === -1 ? (
              <>
                <p>
                  {shortText(getText(reports, parseInt(portfolioId)) || "")}
                </p>
                <p>READ MORE</p>
              </>
            ) : (
              <img
                onContextMenu={(e) => e.preventDefault()}
                loading="lazy"
                src={`${API_KEY}/image/${image.id}`}
                alt={`image${image.id}`}
              />
            )}
          </SmallImage>
        ))}
    </PortfolioStyle>
  );
}
