import {
  NavBarLaptopStyle,
  Reports,
  ReportsLink,
  ReportsTitle,
  TitleLink,
} from "@/Components/Header/styled.ts";
import { useContext } from "react";
import { MainContext } from "@/context.ts";

export default function NavBarLaptop(): JSX.Element {
  const { reports } = useContext(MainContext);

  return (
    <NavBarLaptopStyle>
      <TitleLink to="/portfolio/3">PORTFOLIO</TitleLink>
      <span>⚫</span>

      <Reports>
        <div>
          <ReportsTitle>REPORTAGE</ReportsTitle>
          <span></span>
        </div>
        <div>
          {reports.map((report, i) => (
            <ReportsLink
              key={`${i}${report.title}`}
              to={`/${report.title}/${report.index}`}
            >
              {report.title}
            </ReportsLink>
          ))}
        </div>
      </Reports>
      <span>⚫</span>

      <TitleLink to="/portraits/1">PORTRAITS</TitleLink>
      <span>⚫</span>

      <TitleLink to="/publications/2">PUBLICATIONS</TitleLink>
      <span>⚫</span>

      <TitleLink to="/contact">CONTACT</TitleLink>
      <span>⚫</span>

      <TitleLink to="/apropos">A PROPOS</TitleLink>
    </NavBarLaptopStyle>
  );
}
