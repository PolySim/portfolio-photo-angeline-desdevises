import { AboutStyle, Description } from "@/Components/About/styled.ts";
import { aboutContent } from "@/Components/About/AboutContent.ts";

export default function About(): JSX.Element {
  return (
    <AboutStyle>
      <div>
        <img src="/static/portrait.jpg" alt="portrait d'Angeline Desdevises" />
      </div>
      <Description>
        <h1>Biographie (fr)</h1>
        <p>{aboutContent.fr}</p>
        <h4>Biographie (en)</h4>
        <p>{aboutContent.en}</p>
      </Description>
    </AboutStyle>
  );
}
