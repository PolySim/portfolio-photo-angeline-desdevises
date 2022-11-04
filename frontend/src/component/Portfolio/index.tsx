import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "src/context";
import { GridPortfolio } from "src/styled";
import Share from "src/component/Share";
import Image from "src/component/Portfolio/Image";
import images_information from "src/API/images_information";
import { useParams } from "react-router-dom";
import Images from "src/container/DisplayImage";

export default function Grid({ name }: { name: string }): JSX.Element {
  const params = useParams();
  const reportage = params.numero || "1";
  const { displayImage, setDisplayImage } = useContext(MainContext);
  const [imagesData, setImagesData] = useState<[number, number][]>([]);
  const [focus, setFocus] = useState<number>(-1);
  useEffect(() => setDisplayImage(false), []);

  // Get all image data from one reportage
  useEffect(() => {
    async function getData() {
      const data = await images_information(parseInt(reportage));
      setImagesData(data);
    }
    getData();
  }, [reportage]);

  return (
    <>
      {displayImage ? (
        <Images imagesData={imagesData} focus={focus} />
      ) : (
        <>
          <GridPortfolio>
            {imagesData.map((elt, indices: number) => (
              <Image
                name={name}
                indices={elt[0]}
                key={`${elt[0]}portfolioImage`}
                setFocus={setFocus}
              />
            ))}
          </GridPortfolio>
          <Share footer={true} />
        </>
      )}
    </>
  );
}
