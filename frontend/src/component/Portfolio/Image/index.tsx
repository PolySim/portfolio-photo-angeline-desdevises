import React, { useContext, useRef } from "react";
import { MainContext } from "src/context";
import { useVisible } from "src/container/useVisible";

const cleAPI = process.env.REACT_APP_API_URL;

export default function Image({
  indices,
  setFocus,
}: {
  indices: number;
  setFocus: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const { setDisplayImage } = useContext(MainContext);
  const ref = useRef<any>(null);
  const inViewport = useVisible(ref, "200px");

  return (
    <div
      onClick={() => {
        setDisplayImage(true);
        setFocus(indices);
      }}
      style={{ opacity: inViewport ? "1" : "0" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img
        ref={ref}
        data-src={`${cleAPI}/image?num=${indices}`}
        alt="landscape"
        style={{
          animationDelay: `${indices * 0.2}s`,
        }}
      />
    </div>
  );
}
