import React, { Suspense } from "react";
import { H1 } from "src/styled";
import Navigation from "src/component/Menu/NavBar";
import Share from "src/component/Share";
const Temp = React.lazy(() => import("src/component/Main"));

export default function Headers(): JSX.Element {
  return (
    <>
      <H1>Angeline Desdevises</H1>
      <Navigation />
      <Share footer={false} />
      <Suspense
        fallback={
          <div style={{ height: "100vh", width: "100vw" }}> LOADING </div>
        }
      >
        <Temp />
      </Suspense>
      <Share footer={true} />
    </>
  );
}
