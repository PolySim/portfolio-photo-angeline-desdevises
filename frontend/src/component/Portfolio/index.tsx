import React, { useContext, useEffect } from "react";
import { MainContext } from "src/context";
import { GridPortfolio } from "src/styled";
import Share from "src/component/Share";
import Image from "src/component/Portfolio/Image";

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
          <Image indices={indices} key={`${indices}portfolioImage`} />
        ))}
      </GridPortfolio>
      <Share footer={true} />
    </>
  );
}
