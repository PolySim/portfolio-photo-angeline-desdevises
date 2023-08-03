import { MainTitle, TitleLink } from "@/Components/Header/styled.ts";
import NavBarLaptop from "@/Components/Header/NavBar/NavBarLaptop.tsx";
import { useEffect, useState } from "react";
import NavBarPhone from "@/Components/Header/NavBar/NavBarPhone.tsx";

export default function Header(): JSX.Element {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <MainTitle>
        <TitleLink to="/">Angeline Desdevises</TitleLink>
      </MainTitle>
      {width > 700 ? <NavBarLaptop /> : <NavBarPhone />}
    </>
  );
}
