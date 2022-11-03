import React, { useState } from "react";
// import { useWindowScroll } from "react-use";
import BigImage from "src/container/DisplayImage/Image";
import { useSwipeable } from "react-swipeable";

export default function Images({
  imagesData,
  focus,
}: {
  imagesData: [number, number][];
  focus: number;
}): JSX.Element {
  const listImages = imagesData.map((image) => image[0]);
  const [display, setDisplay] = useState<number>(listImages.indexOf(focus));
  // const ref: any = useRef(null);
  // const [lastX, setLastX] = useState<number>(0);
  // const { x } = useWindowScroll();

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
      if (display === listImages.length - 1) {
        setDisplay(0);
      } else {
        setDisplay(display + 1);
      }
    } else {
      if (display === 0) {
        setDisplay(listImages.length - 1);
      } else {
        setDisplay(display - 1);
      }
    }
  };

  // useEffect(() => {
  //   if (x > lastX) {
  //     onToggleDisplay(true);
  //     window.moveTo(0, 0);
  //   } else if (x < lastX) {
  //     onToggleDisplay(false);
  //     window.moveTo(0, 0);
  //   }
  //   setLastX(x);
  // }, [x]);

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
        {imagesData.map((elt) => (
          <BigImage
            key={`${elt}Image`}
            id={elt[0]}
            display={display}
            onToggleDisplay={onToggleDisplay}
            listImages={listImages}
          />
        ))}
      </div>
    </div>
  );
}
