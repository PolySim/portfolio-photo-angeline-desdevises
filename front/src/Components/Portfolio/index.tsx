import { PortfolioStyle } from "@/Components/Portfolio/styled.ts";
import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "@/context.ts";
import { FullScreenType, ImagesID } from "@/type.ts";
import images_information from "@/API/images_information.ts";
import { getText } from "@/Components/Portfolio/getText.ts";
import Index from "@/Components/Portfolio/FullScreen";
import SmallImageComponent from "@/Components/Portfolio/SmallImage.tsx";

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
        console.log(portfolioId);
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
          <React.Fragment key={image.id}>
            <SmallImageComponent
              image={image}
              setFullScreen={setFullScreen}
              index={i}
            />
          </React.Fragment>
        ))}
    </PortfolioStyle>
  );
}
