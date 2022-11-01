import React, { useContext } from "react";
import { H1 } from "src/styled";
import Navigation from "src/component/Menu/NavBar";
import NavResponsive from "../NavResponsive";
import Share from "src/component/Share";
import { Link } from "react-router-dom";
import { MainContext } from "src/context";

export default function Header({
  width,
  click,
  setClick,
}: {
  width: number;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const { pagesInformation } = useContext(MainContext);

  const nameReportage: string[] = pagesInformation.map(
    (reportage) => reportage[0]
  );
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
          <Navigation reportage={nameReportage} />
          <Share footer={false} />
        </>
      ) : (
        <NavResponsive
          click={click}
          setClick={setClick}
          reportage={nameReportage}
        />
      )}{" "}
    </>
  );
}
