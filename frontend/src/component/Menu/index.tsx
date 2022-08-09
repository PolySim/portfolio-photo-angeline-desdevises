import React from "react";
import { H1 } from "src/styled";
import Navigation from "src/component/Menu/NavBar";
import Share from "src/component/Share";

export default function Headers(): JSX.Element {
  return (
    <>
      <H1>Angeline Desdevises</H1>
      <Navigation />
      <Share />
    </>
  );
}
