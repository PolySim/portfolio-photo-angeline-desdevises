import React, { useContext, useRef } from "react";
import { MainContext } from "src/context";
import { Link } from "react-router-dom";
import { useVisible } from "src/container/useVisible";

export default function Image({ indices }: { indices: number }): JSX.Element {
  const { setDisplayImage } = useContext(MainContext);
  const ref = useRef<any>(null);
  const inViewport = useVisible(ref, "50px");

  return (
    <Link
      to={`/portfolio/${indices}`}
      onClick={() => setDisplayImage(true)}
      style={{ opacity: inViewport ? "1" : "0" }}
    >
      <img
        ref={ref}
        data-src={require("./landscape.jpg")}
        alt="landscape"
        style={{
          animationDelay: `${indices * 0.2}s`,
        }}
      />
    </Link>
  );
}
