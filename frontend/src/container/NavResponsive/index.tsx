import React, { useEffect, useState } from "react";
import { Header, ArticleNavBarPhone } from "src/styled";
import Button from "src/component/Menu/Button";
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
        <h1>Angeline Desdevises</h1>
        <Button click={click} setClick={setClick} />
      </Header>
      {click ? (
        <ArticleNavBarPhone>
          <a href="">PORTFOLIO</a>
          <div>
            <a href="">REPORTAGE</a>
            {reportage.map((article) => {
              return (
                <a href="" key={article}>
                  {article}
                </a>
              );
            })}
          </div>
          <a href="">PORTRAITS</a>
          <a href="">PUBLICATIONS</a>
          <a href="">CONTACT</a>
          <a href="">A PROPOS</a>
        </ArticleNavBarPhone>
      ) : (
        <></>
      )}
    </>
  );
}
