import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "src/context";
import { GridPortfolio } from "src/styled";
import Share from "src/component/Share";
import Image from "src/component/Portfolio/Image";
import images_information from "src/API/images_information";
import { useParams } from "react-router-dom";

export default function Grid({ name }: { name: string }): JSX.Element {
  const params = useParams();
  const reportage = params.numero || "1";

  const { setDisplayImage } = useContext(MainContext);
  const [imagesData, setImagesData] = useState<[number, number][]>([]);
  useEffect(() => setDisplayImage(false), []);

  // Get all image data from one reportage
  useEffect(() => {
    async function getData() {
      const data = await images_information(parseInt(reportage));
      setImagesData(data);
    }
    if (imagesData.length === 0) {
      getData();
    }
  }, [reportage]);

  return (
    <>
      <GridPortfolio>
        {imagesData.map((elt, indices: number) => (
          <Image
            name={name}
            indices={elt[0]}
            key={`${indices}portfolioImage`}
          />
        ))}
      </GridPortfolio>
      <Share footer={true} />
    </>
  );
}
