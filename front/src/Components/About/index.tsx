import { AboutStyle, Description } from "@/Components/About/styled.ts";
import {useEffect, useState} from "react";
import {get_biography} from "@/API/get_biography.ts";

type Biography = {
  fr: string;
  en: string;
}

export default function About(): JSX.Element {
  const [biography, setBiography] = useState<Biography | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await get_biography("fr");
      setBiography(data);
    }
    void getData();
  }, []);

  return (
    <AboutStyle>
      <div>
        <img
          onContextMenu={(e) => e.preventDefault()}
          src="/static/portrait.jpg"
          alt="portrait d'Angeline Desdevises"
        />
      </div>
      <Description>
        <h1>Biographie (fr)</h1>
        <p>{biography?.fr}</p>
        <h4>Biography (en)</h4>
        <p>{biography?.en}</p>
      </Description>
    </AboutStyle>
  );
}
