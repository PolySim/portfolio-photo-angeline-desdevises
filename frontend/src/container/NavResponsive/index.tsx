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
        <Link to="/" style={{ textDecoration: "none", color: "#232323" }}>
          <h1>Angeline Desdevises</h1>
        </Link>
        <Button click={click} setClick={setClick} />
      </Header>
      {click ? (
        <ArticleNavBarPhone>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
          >
            PORTFOLIO
          </Link>
          <div>
            <Link
              to="/portfolio"
              style={{ textDecoration: "none", color: "#000" }}
            >
              REPORTAGE
            </Link>
            {reportage.map((article) => {
              return (
                <Link
                  to="/portfolio"
                  style={{ textDecoration: "none", color: "#000" }}
                  key={article}
                >
                  {article}
                </Link>
              );
            })}
          </div>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
          >
            PORTRAITS
          </Link>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
          >
            PUBLICATIONS
          </Link>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
          >
            CONTACT
          </Link>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "#000" }}
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
