import React, { Suspense } from "react";
import { H1 } from "src/styled";
import Navigation from "src/component/Menu/NavBar";
import Share from "src/component/Share";
const Temp = React.lazy(() => import("src/component/Main"));

export default function Headers(): JSX.Element {
  return (
    <>
      <H1>Angeline Desdevises</H1>
      <Navigation
        reportage={[
          "SAN MARCU 2022",
          "Reportage : Agriculture Passion ou Prison",
          "Pélerinage Gitans , Saintes Maries de la Mer",
          "Reportage initiative citoyenne",
          "Confrérie SAN MARCU, Corse",
          "Reportage finaliste concours SOPHOT - Galerie Fait et Cause",
          "Ganesh Festival",
        ]}
      />
      <Share footer={false} />
      <Suspense
        fallback={
          <div style={{ height: "100vh", width: "100vw", textAlign: "center" }}>
            {" "}
            LOADING{" "}
          </div>
        }
      >
        <Temp />
      </Suspense>
      <Share footer={true} />
    </>
  );
}
