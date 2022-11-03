import React, { useState, useEffect, useRef, useContext } from "react";
import { MainContext } from "src/context";
import { DisplayImage } from "src/styled";
import { Style, BigImageProps } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default function BigImage({
  id,
  display,
  onToggleDisplay,
  listImages,
}: BigImageProps): JSX.Element {
  const [bigger, setBigger] = useState<number>(0);
  const ref: any = useRef(null);
  const { setDisplayImage } = useContext(MainContext);
  const [onMove, setOnMove] = useState<boolean>(false);
  let last: number = 0;

  const style: Style[] = [
    { width: "100%", height: "auto" },
    { width: "auto", height: "100%" },
  ];

  useEffect(() => {
    if (ref.current) {
      if (
        id === listImages[display] ||
        id === listImages[display - 1] ||
        id === listImages[display + 1] ||
        (display === 0 && id === listImages[listImages.length - 1]) ||
        (display === 17 && id === listImages[0])
      ) {
        ref.current.src = ref.current.dataset.src;
      }
    }
  }, [display]);

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
  useEffect(() => {
    const handleMove = () => {
      setOnMove(true);
      last += 1;
      const timer = setTimeout(() => {
        last -= 1;
        if (last === 0) {
          setOnMove(false);
        }
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMove);
    setDisplayImage(true);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [bigger]);

  return (
    <DisplayImage>
      <div>
        <div
          style={{
            opacity: onMove ? "1" : window.innerWidth < 770 ? "0.6" : "0",
          }}
          onClick={() => setDisplayImage(false)}
        >
          <svg
            aria-label="Fermer"
            color="#000"
            fill="#000"
            height="40"
            role="img"
            viewBox="0 0 24 24"
            width="40"
          >
            <polyline
              fill="none"
              points="20.643 3.357 12 12 3.353 20.647"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            ></polyline>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              x1="20.649"
              x2="3.354"
              y1="20.649"
              y2="3.354"
            ></line>
          </svg>
        </div>
      </div>
      <img
        onLoad={() => handleResize()}
        style={style[bigger]}
        data-src={`${cleAPI}/image?num=${id}`}
        alt={`${id}`}
        ref={ref}
        onContextMenu={(e) => e.preventDefault()}
      />
      <div>
        <button onClick={() => onToggleDisplay(false)}>
          <div>
            <svg width="50px" height="50px" viewBox="0 0 24 24">
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
            </svg>
          </div>
        </button>
        <button onClick={() => onToggleDisplay(true)}>
          <div>
            <svg width="50px" height="50px" viewBox="0 0 24 24">
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
            </svg>
          </div>
        </button>
      </div>
    </DisplayImage>
  );
}
