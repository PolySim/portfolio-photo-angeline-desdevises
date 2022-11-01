import React, { useContext, useRef } from "react";
import { MainContext } from "src/context";
import { Link } from "react-router-dom";
import { useVisible } from "src/container/useVisible";

const cleAPI = process.env.REACT_APP_API_URL;

export default function Image({
  name,
  indices,
}: {
  name: string;
  indices: number;
}): JSX.Element {
  const { setDisplayImage } = useContext(MainContext);
  const ref = useRef<any>(null);
  const inViewport = useVisible(ref, "0px");

  console.log(inViewport);
  console.log(indices);

  return (
    <Link
      to={`/${name}/${indices}`}
      onClick={() => setDisplayImage(true)}
      style={{ opacity: inViewport ? "1" : "0" }}
    >
      <img
        ref={ref}
        data-src={`${cleAPI}/image?num=${indices}`}
        alt="landscape"
        style={{
          animationDelay: `${indices * 0.2}s`,
        }}
      />
    </Link>
  );
}
