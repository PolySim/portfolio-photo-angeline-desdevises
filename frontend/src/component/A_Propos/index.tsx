import React from "react";
import { Propos } from "src/styled";
import Share from "src/component/Share";

export default function APropos(): JSX.Element {
  return (
    <>
      <Propos>
        <div>
          <div>
            <img
              src={require("./portrait.jpg")}
              alt="Portrait d'Angeline Desdevises"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div>
            <h1>Biographie (fr)</h1>
            <div>
              Photographe indépendante basée à Rennes et originaire de
              Normandie, j'ai façonné ma pratique de la photo de façon
              autodidacte depuis l'adolescence. Après trois années d'étude en
              information et communication, je me suis dirigée vers un service
              civique au Club de la Presse de Bretagne. J'ai mené des missions
              d'éducation aux médias et côtoyé de près le monde de la presse au
              sens large. Mon travail s'articule essentiellement autour de la
              photo d'actualité et documentaire. Les questions de société sont
              mes sujets de prédilections. J'ai une approche diversifiée de la
              photographie et m'intéresse également aux thématiques de la
              mémoire, des origines et de la transmission, à la façon dont les
              récits individuels peuvent faire échos à des histoires
              collectives.
            </div>
            <h4>Biography (EN)</h4>
            <div>
              Freelance photographer based in Rennes and originally from
              Normandy, I shaped my practice of photography in a self-taught way
              since my teenage years. After three years of study in information
              and communication, I decided to do a civic service at the Press
              Club of Brittany. I led missions of education to the media and was
              in close contact with the world of the press in a broad sense. My
              work is mainly based on news and documentary photography. Social
              issues are my favorite subjects. I have a diversified approach to
              photography and I am also interested in the themes of memory,
              origins and transmission, in the way individual stories can echo
              collective histories.
            </div>
          </div>
        </div>
      </Propos>
      <Share footer={true} />
    </>
  );
}
