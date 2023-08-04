import SocialLink from "@/Components/SocialLink";
import { FooterStyle } from "@/Components/Footer/styled.ts";

export default function Footer(): JSX.Element {
  return (
    <>
      <SocialLink footer={true} />
      <FooterStyle>
        <p>Reproduction interdite - Copyright Angeline Desdevises</p>
        <p>
          Développé par{" "}
          <a href="https://www.simondesdevises.com" target="_blank">
            Simon Desdevises
          </a>
        </p>
      </FooterStyle>
    </>
  );
}
