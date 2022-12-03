import React, { useState, useContext } from "react";
import BigImage from "src/container/DisplayImage/Image";
import { useSwipeable } from "react-swipeable";
import { useParams } from "react-router-dom";
import { MainContext } from "src/context";

export default function Images({
  imagesData,
  focus,
}: {
  imagesData: [number, number][];
  focus: number;
}): JSX.Element {
  const { pagesInformation } = useContext(MainContext);
  const params = useParams();
  const reportage = params.numero || "1";

  const text: () => string = () => {
    let description: string = "";
    pagesInformation.forEach((page) => {
      if (page[1] === parseInt(reportage) && page[2]) {
        description = page[2];
      }
    });
    return description;
  };

  const listImages = imagesData.map((image) => image[0]);
  const [display, setDisplay] = useState<number>(
    focus === -1
      ? 1
      : text() === "" || listImages.indexOf(focus) < 1
      ? listImages.indexOf(focus)
      : listImages.indexOf(focus) + 1
  );

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === "Left") {
        onToggleDisplay(true);
      } else if (eventData.dir === "Right") {
        onToggleDisplay(false);
      }
    },
  });

  const onToggleDisplay = (add: boolean) => {
    if (add) {
      if (
        (text() === "" && display === listImages.length - 1) ||
        display === listImages.length
      ) {
        setDisplay(0);
      } else {
        setDisplay(display + 1);
      }
    } else {
      if (display === 0) {
        text() === ""
          ? setDisplay(listImages.length - 1)
          : setDisplay(listImages.length);
      } else {
        setDisplay(display - 1);
      }
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "absolute",
        top: "0",
      }}
    >
      <div
        {...handlers}
        style={{
          display: "flex",
          transform: `translateX(${-100 * display}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {imagesData.map((elt, i: number) => (
          <div key={i}>
            {i === 1 && text() !== "" ? (
              <div key={`${i}text`} style={{ display: "flex" }}>
                <BigImage
                  id={elt[0]}
                  display={display}
                  onToggleDisplay={onToggleDisplay}
                  listImages={listImages}
                  text={text()}
                />
                <BigImage
                  id={elt[0]}
                  display={display}
                  onToggleDisplay={onToggleDisplay}
                  listImages={listImages}
                  text=""
                />
              </div>
            ) : i === 0 ? (
              <BigImage
                key={`${i}Image`}
                id={elt[0]}
                display={display}
                onToggleDisplay={onToggleDisplay}
                listImages={listImages}
                text=""
              />
            ) : (
              <BigImage
                key={`${i}Image`}
                id={elt[0]}
                display={display}
                onToggleDisplay={onToggleDisplay}
                listImages={listImages}
                text=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
