import { useContext, useState } from "react";
import {
  ButtonOpenMenu,
  NavBarPhoneStyle,
  ReportsLink,
  TitleLink,
} from "@/Components/Header/styled.ts";
import { MainContext } from "@/context.ts";

export default function NavBarPhone(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { reports } = useContext(MainContext);

  return (
    <NavBarPhoneStyle $open={isOpen}>
      <ButtonOpenMenu $open={isOpen} onClick={() => setIsOpen((curr) => !curr)}>
        <span />
        <span />
        <span />
      </ButtonOpenMenu>
      <TitleLink to="/portfolio/3">PORTFOLIO</TitleLink>
      <br />
      <p>REPORTAGE</p>
      {reports.map((report, i) => (
        <ReportsLink
          key={`${i}${report.title}`}
          to={`/${report.title}/${report.index}`}
        >
          {report.title}
        </ReportsLink>
      ))}
      <TitleLink style={{ marginTop: "55px" }} to="/portraits/1">
        PORTRAITS
      </TitleLink>
      <TitleLink to="/publications/2">PUBLICATIONS</TitleLink>
      <TitleLink to="/contact">CONTACT</TitleLink>
      <TitleLink to="/apropos">A PROPOS</TitleLink>
    </NavBarPhoneStyle>
  );
}
