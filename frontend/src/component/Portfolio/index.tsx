import React, { useContext, useEffect } from "react";
import { MainContext } from "src/context";
import { GridPortfolio } from "src/styled";
import Share from "src/component/Share";
import { Link } from "react-router-dom";

const createTab = (length: number) => {
  let tab = [];
  for (let i = 0; i < length; i++) {
    tab.push(i);
  }
  return tab;
};

export default function Portfolio(): JSX.Element {
  const { setDisplayImage } = useContext(MainContext);
  useEffect(() => setDisplayImage(false), []);

  return (
    <>
      <GridPortfolio>
        {createTab(18).map((elt, indices: number) => (
          <Link
            to={`/portfolio/${indices}`}
            onClick={() => setDisplayImage(true)}
            key={`${indices}portfolioImage`}
          >
            <div style={{ animationDelay: `${indices * 0.2}s` }}></div>
          </Link>
        ))}
      </GridPortfolio>
      <Share footer={true} />
    </>
  );
}
