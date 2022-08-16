import React, { useState, useEffect, useRef, useContext } from "react";
import { MainContext } from "src/context";
import { DisplayImage } from "src/styled";
import { Link } from "react-router-dom";
import { Style, BigImageProps } from "src/type";

export default function BigImage({
  id,
  display,
  onToggleDisplay,
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
        id === display ||
        id === display - 1 ||
        id === display + 1 ||
        (display === 0 && id === 17) ||
        (display === 17 && id === 0)
      ) {
        ref.current.src = ref.current.dataset.src;
      }
    }
  }, [display]);

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
      window.removeEventListener("mousemove", handleResize);
    };
  }, []);

  return (
    <DisplayImage>
      <div>
        <Link
          to={"/portfolio"}
          style={{
            opacity: onMove ? "1" : window.innerWidth < 770 ? "0.6" : "0",
          }}
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
        </Link>
      </div>
      <img
        style={style[bigger]}
        data-src={require("./landscape.jpg")}
        alt={`${id}Image`}
        ref={ref}
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
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
            </svg>
          </div>
        </button>
      </div>
    </DisplayImage>
  );
}
