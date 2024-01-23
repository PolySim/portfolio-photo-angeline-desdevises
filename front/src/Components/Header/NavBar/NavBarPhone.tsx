import { useContext, useState } from "react";
import {
  ButtonOpenMenu,
  NavBarPhoneStyle,
  ReportsLink,
  TitleLink,
} from "@/Components/Header/styled.ts";
import { MainContext } from "@/context.ts";

export default function NavBarPhone(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { reports } = useContext(MainContext);

  return (
    <NavBarPhoneStyle $open={isOpen}>
      <ButtonOpenMenu $open={isOpen} onClick={() => setIsOpen((curr) => !curr)}>
        <span />
        <span />
        <span />
      </ButtonOpenMenu>
      <TitleLink to="/portfolio/3" onClick={() => setIsOpen((curr) => !curr)}>PORTFOLIO</TitleLink>
      <br />
      <p>REPORTAGE</p>
      {reports.map((report, i) => (
        <ReportsLink
          key={`${i}${report.title}`}
          to={`/portfolio/${report.index}`}
          onClick={() => setIsOpen((curr) => !curr)}
        >
          {report.title}
        </ReportsLink>
      ))}
      <TitleLink style={{ marginTop: "55px" }} to="/portfolio/1" onClick={() => setIsOpen((curr) => !curr)}>
        PORTRAITS
      </TitleLink>
      <TitleLink to="/portfolio/2" onClick={() => setIsOpen((curr) => !curr)}>PUBLICATIONS</TitleLink>
      <TitleLink to="/contact" onClick={() => setIsOpen((curr) => !curr)}>CONTACT</TitleLink>
      <TitleLink to="/apropos" onClick={() => setIsOpen((curr) => !curr)}>A PROPOS</TitleLink>
    </NavBarPhoneStyle>
  );
}
