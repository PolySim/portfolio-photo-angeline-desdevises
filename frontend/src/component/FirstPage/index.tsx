import React, { Suspense, useState } from "react";
import { H1 } from "src/styled";
import Navigation from "src/component/Menu/NavBar";
import Share from "src/component/Share";
import NavResponsive from "src/container/NavResponsive";
const Temp = React.lazy(() => import("src/container/FirstPage/Main"));

export default function FirstPage({ width }: { width: number }): JSX.Element {
  const [click, setClick] = useState<boolean>(false);
  return (
    <>
      {width > 770 ? (
        <>
          <H1>
            <h1>Angeline Desdevises</h1>
          </H1>
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
        </>
      ) : (
        <NavResponsive
          click={click}
          setClick={setClick}
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
      )}
      {click ? (
        <></>
      ) : (
        <>
          {" "}
          <Suspense
            fallback={
              <div
                style={{ height: "100vh", width: "100vw", textAlign: "center" }}
              >
                {" "}
                LOADING{" "}
              </div>
            }
          >
            <Temp />
          </Suspense>
          <Share footer={true} />{" "}
        </>
      )}
    </>
  );
}
