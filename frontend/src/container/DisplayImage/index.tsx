import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { DisplayImage } from "src/styled";
import { Style } from "src/type";

export default function Image({}): JSX.Element {
  const { id } = useParams();
  const [bigger, setBigger] = useState<number>(0);
  const ref: any = useRef(null);

  const style: Style[] = [
    { width: "100%", height: "auto" },
    { width: "auto", height: "100%" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        if (ref.current.offsetWidth > window.innerWidth) {
          setBigger(0);
        }
        if (ref.current.offsetHeight > window.innerHeight) {
          setBigger(1);
        }
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <DisplayImage>
      <img
        style={style[bigger]}
        src={require("./landscape.jpg")}
        alt={`${id}Image`}
        ref={ref}
      />
      <div>
        <svg>
          <path d="M2.615 21L21.708 1.907c.39-.39.39-1.023 0-1.413-.394-.393-1.024-.39-1.414 0l-19.8 19.8C.297 20.49.2 20.744.2 21c0 .257.098.51.293.706l19.8 19.8c.39.39 1.024.39 1.414 0 .393-.393.39-1.023 0-1.413L2.616 21z"></path>
        </svg>
        <svg>
          <path d="M19.385 21L.292 40.093c-.39.39-.39 1.023 0 1.413.394.393 1.024.39 1.414 0l19.8-19.8c.196-.195.293-.45.293-.705 0-.257-.098-.51-.293-.706L1.707.494C1.316.103.682.103.292.493c-.393.393-.39 1.023 0 1.413L19.384 21z"></path>
        </svg>
      </div>
    </DisplayImage>
  );
}
