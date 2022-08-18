import React, { useState, useEffect, useRef } from "react";
import { NavBar, ArticleNavBar } from "src/styled";
import { Link } from "react-router-dom";

export default function Navigation({
  reportage,
}: {
  reportage: string[];
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
          to="/portfolio"
          style={{ textDecoration: "none", color: over ? "#7cc4c5" : "#000" }}
        >
          REPORTAGE
        </Link>
        <ArticleNavBar>
          {over ? (
            reportage.map((article) => {
              return <div key={article}>{article}</div>;
            })
          ) : (
            <></>
          )}
        </ArticleNavBar>
      </div>
      <div>⚫</div>
      <div>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          PORTRAITS
        </Link>
      </div>
      <div>⚫</div>
      <div>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          PUBLICATIONS
        </Link>
      </div>
      <div>⚫</div>
      <div>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
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
