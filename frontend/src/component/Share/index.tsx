import React from "react";
import { ShareButton } from "src/styled";

export default function Share(): JSX.Element {
  return (
    <ShareButton>
      <a
        href="https://www.instagram.com/angeline_desdevises/?hl=fr"
        target={"_blank"}
      >
        <img src={require("./instagram.png")} alt="instagram" />
      </a>
      <a href="https://www.facebook.com/angeline.desdevises" target={"_blank"}>
        <img src={require("./facebook.png")} alt="facebook" />
      </a>
      <a href="https://twitter.com/jsuiSim" target={"_blank"}>
        <img src={require("./twitter.png")} alt="twitter" />
      </a>
      <p>Share</p>
    </ShareButton>
  );
}
