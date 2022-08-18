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
  reportage: string[];
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
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => setClick(false)}
          >
            PORTFOLIO
          </Link>
          <div>
            <Link
              to="/portfolio"
              style={{ textDecoration: "none", color: "#000" }}
              onClick={() => setClick(false)}
            >
              REPORTAGE
            </Link>
            {reportage.map((article) => {
              return (
                <Link
                  to="/portfolio"
                  style={{ textDecoration: "none", color: "#000" }}
                  key={article}
                  onClick={() => setClick(false)}
                >
                  {article}
                </Link>
              );
            })}
          </div>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => setClick(false)}
          >
            PORTRAITS
          </Link>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
            onClick={() => setClick(false)}
          >
            PUBLICATIONS
          </Link>
          <Link
            to="/portfolio"
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
