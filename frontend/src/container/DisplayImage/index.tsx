import React, { useState, useRef, useEffect } from "react";
import { useWindowScroll } from "react-use";
import BigImage from "src/container/DisplayImage/Image";
import { useParams } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const createTab = (length: number): number[] => {
  let tab = [];
  for (let i = 0; i < length; i++) {
    tab.push(i);
  }
  return tab;
};

export default function Images(): JSX.Element {
  const { id } = useParams();
  const [display, setDisplay] = useState<number>(parseInt(id || "0"));
  const ref: any = useRef(null);
  const [lastX, setLastX] = useState<number>(0);
  const { x } = useWindowScroll();

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
      if (display === 17) {
        setDisplay(0);
      } else {
        setDisplay(display + 1);
      }
    } else {
      if (display === 0) {
        setDisplay(17);
      } else {
        setDisplay(display - 1);
      }
    }
  };

  useEffect(() => {
    if (x > lastX) {
      onToggleDisplay(true);
      window.moveTo(0, 0);
    } else if (x < lastX) {
      onToggleDisplay(false);
      window.moveTo(0, 0);
    }
    setLastX(x);
  }, [x]);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div
        {...handlers}
        style={{
          display: "flex",
          transform: `translateX(${-100 * display}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {createTab(18).map((elt) => (
          <BigImage
            key={`${elt}Image`}
            id={elt}
            display={display}
            onToggleDisplay={onToggleDisplay}
          />
        ))}
      </div>
    </div>
  );
}
