import { MainTitle, TitleLink } from "@/Components/Header/styled.ts";
import NavBarLaptop from "@/Components/Header/NavBar/NavBarLaptop.tsx";

export default function HeaderLaptop(): JSX.Element {
  return (
    <>
      <MainTitle>
        <TitleLink to="/">Angeline Desdevises</TitleLink>
      </MainTitle>
      <NavBarLaptop />
    </>
  );
}
