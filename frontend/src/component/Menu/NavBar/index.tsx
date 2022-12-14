import React, { useState, useEffect, useRef } from "react";
import { NavBar, ArticleNavBar } from "src/styled";
import { Link } from "react-router-dom";

export default function Navigation({
  reportage,
}: {
  reportage: [number, string][];
}): JSX.Element {
  const [over, setOver] = useState<boolean>(false);
  const ref: React.MutableRefObject<any> = useRef(null);

  useEffect(() => {
    const isOver = (value: boolean) => {
      if (ref.current) {
        setOver(value);
      }
    };

    if (ref.current) {
      ref.current.addEventListener("mouseover", () => isOver(true));
      ref.current.addEventListener("mouseout", () => isOver(false));
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseover", () => isOver(true));
        ref.current.removeEventListener("mouseout", () => isOver(false));
      }
    };
  }, []);

  return (
    <NavBar>
      <div>
        <Link
          to="/portfolio/3"
          style={{ textDecoration: "none", marginLeft: "0" }}
        >
          PORTFOLIO
        </Link>
      </div>
      <div>⚫</div>
      <div ref={ref}>
        <p style={{ textDecoration: "none", color: over ? "#7cc4c5" : "#000" }}>
          REPORTAGE
        </p>
        <ArticleNavBar>
          {over ? (
            reportage.map((article, i) => {
              return (
                <Link
                  to={`/reportage/${article[0]}`}
                  style={{ textDecoration: "none", color: "#000" }}
                  key={article[0]}
                >
                  {article[1]}
                </Link>
              );
            })
          ) : (
            <></>
          )}
        </ArticleNavBar>
      </div>
      <div>⚫</div>
      <div>
        <Link to="/portraits/1" style={{ textDecoration: "none" }}>
          PORTRAITS
        </Link>
      </div>
      <div>⚫</div>
      <div>
        <Link to="/publications/2" style={{ textDecoration: "none" }}>
          PUBLICATIONS
        </Link>
      </div>
      <div>⚫</div>
      <div>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          CONTACT
        </Link>
      </div>
      <div>⚫</div>
      <div>
        <Link to="/apropos" style={{ textDecoration: "none" }}>
          A PROPOS
        </Link>
      </div>
    </NavBar>
  );
}
