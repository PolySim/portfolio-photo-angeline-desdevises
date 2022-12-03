import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "src/context";
import { GridPortfolio } from "src/styled";
import Share from "src/component/Share";
import Image from "src/component/Portfolio/Image";
import images_information from "src/API/images_information";
import { useParams } from "react-router-dom";
import Images from "src/container/DisplayImage";
import DescriptionView from "src/component/Portfolio/Description";

export default function Grid(): JSX.Element {
  const params = useParams();
  const reportage = params.numero || "1";
  const { displayImage, setDisplayImage, pagesInformation } =
    useContext(MainContext);
  const [imagesData, setImagesData] = useState<[number][]>([]);
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

  useEffect(() => {
    if (text() !== "") {
      setImagesData((imagesData) => imagesData.splice(1, 0, [0]));
    }
  }, [reportage]);

  const text: () => string = () => {
    let shortText: string = "";
    pagesInformation.forEach((page) => {
      if (page[0] === parseInt(reportage) && page[2]) {
        shortText = page[2].slice(0, 100);
      }
    });
    if (shortText === "") {
      return "";
    }
    let goodText = shortText.split(" ");
    goodText.pop();
    return goodText.join(" ") + " ...";
  };

  return (
    <>
      {displayImage ? (
        <Images imagesData={imagesData} focus={focus} />
      ) : (
        <>
          <GridPortfolio>
            {imagesData.map((elt, i: number) => (
              <div key={i}>
                {i === 1 && text() !== "" ? (
                  <>
                    <DescriptionView text={text()} setFocus={setFocus} />
                  </>
                ) : (
                  <Image
                    indices={
                      i === 0 ? elt[0] : text() === "" ? elt[0] : elt[0] - 1
                    }
                    key={`${elt[0]}portfolioImage`}
                    setFocus={setFocus}
                  />
                )}
              </div>
            ))}
          </GridPortfolio>
          <Share footer={true} />
        </>
      )}
    </>
  );
}
