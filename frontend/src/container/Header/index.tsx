import React from "react";
import { H1 } from "src/styled";
import Navigation from "src/component/Menu/NavBar";
import NavResponsive from "../NavResponsive";
import Share from "src/component/Share";
import { Link } from "react-router-dom";

export default function Header({
  width,
  click,
  setClick,
}: {
  width: number;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <>
      {" "}
      {width > 770 ? (
        <>
          <H1>
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              <h1>Angeline Desdevises</h1>
            </Link>
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
      )}{" "}
    </>
  );
}
