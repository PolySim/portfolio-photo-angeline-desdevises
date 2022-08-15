import React, { useState } from "react";
import BigImage from "src/container/DisplayImage/Image";
import { useParams } from "react-router-dom";

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
  return (
    <div
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
          setDisplay={setDisplay}
        />
      ))}
    </div>
  );
}
