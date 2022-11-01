import React, { useState, useEffect, useRef } from "react";
import { NavBar, ArticleNavBar } from "src/styled";
import { Link } from "react-router-dom";

export default function Navigation({
  reportage,
}: {
  reportage: [string, number][];
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
          to="/portfolio"
          style={{ textDecoration: "none", marginLeft: "0" }}
        >
          PORTFOLIO
        </Link>
      </div>
      <div>⚫</div>
      <div ref={ref}>
        <Link
          to="/reportage"
          style={{ textDecoration: "none", color: over ? "#7cc4c5" : "#000" }}
        >
          REPORTAGE
        </Link>
        <ArticleNavBar>
          {over ? (
            reportage.map((article, i) => {
              return (
                <Link
                  to={`/reportage/${article[1]}`}
                  style={{ textDecoration: "none", color: "#000" }}
                  key={article[0]}
                >
                  {article[0]}
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
        <Link to="/portraits" style={{ textDecoration: "none" }}>
          PORTRAITS
        </Link>
      </div>
      <div>⚫</div>
      <div>
        <Link to="/publications" style={{ textDecoration: "none" }}>
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
