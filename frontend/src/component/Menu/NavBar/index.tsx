import React, { useState, useEffect, useRef } from "react";
import { NavBar, ArticleNavBar } from "src/styled";

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

    ref.current.addEventListener("mouseover", () => isOver(true));
    ref.current.addEventListener("mouseout", () => isOver(false));

    return () => {
      ref.current.removeEventListener("mouseover", () => isOver(true));
      ref.current.removeEventListener("mouseout", () => isOver(false));
    };
  }, []);

  return (
    <NavBar>
      <a href="">PORTFOLIO</a>
      <div>⚫</div>
      <div ref={ref}>
        <a href="">REPORTAGE</a>
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
      <a href="">PORTRAITS</a>
      <div>⚫</div>
      <a href="">PUBLICATIONS</a>
      <div>⚫</div>
      <a href="">CONTACT</a>
      <div>⚫</div>
      <a href="">A PROPOS</a>
    </NavBar>
  );
}
