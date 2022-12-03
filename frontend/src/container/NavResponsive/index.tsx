import React, { useEffect, useState } from "react";
import { Header, ArticleNavBarPhone } from "src/styled";
import Button from "src/component/Menu/Button";
import { Link } from "react-router-dom";
import Share from "src/component/Share";

export default function NavResponsive({
  click,
  setClick,
  reportage,
}: {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  reportage: [number, string][];
}): JSX.Element {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 200);
  }, []);

  return (
    <>
      <Header>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#232323" }}
          onClick={() => setClick(false)}
        >
          <h1>Angeline Desdevises</h1>
        </Link>
        <Button click={click} setClick={setClick} />
      </Header>
      {click ? (
        <ArticleNavBarPhone>
          <Link
            to="/portfolio/3"
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => setClick(false)}
          >
            PORTFOLIO
          </Link>
          <div>
            <p style={{ textDecoration: "none", color: "#000" }}>REPORTAGE</p>
            {reportage.map((article, i) => {
              return (
                <Link
                  to={`/reportage/${article[0]}`}
                  style={{ textDecoration: "none", color: "#000" }}
                  key={article[0]}
                  onClick={() => setClick(false)}
                >
                  {article[1]}
                </Link>
              );
            })}
          </div>
          <Link
            to="/portraits/1"
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => setClick(false)}
          >
            PORTRAITS
          </Link>
          <Link
            to="/publications/2"
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => setClick(false)}
          >
            PUBLICATIONS
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => setClick(false)}
          >
            CONTACT
          </Link>
          <Link
            to="/apropos"
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => setClick(false)}
          >
            A PROPOS
          </Link>
        </ArticleNavBarPhone>
      ) : (
        <></>
      )}
    </>
  );
}
