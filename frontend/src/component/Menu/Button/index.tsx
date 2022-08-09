import React, { useState } from "react";
import { MenuButton } from "src/styled";

export default function Button(): JSX.Element {
  const [click, setClick] = useState<boolean>(false);

  return (
    <MenuButton
      onClick={() => {
        setClick(!click);
      }}
    >
      <div style={{ animation: click ? "test1 1s forwards" : "none" }}></div>
      <div
        style={{ opacity: click ? "0" : "1", transition: "opacity 0.3s" }}
      ></div>
      <div style={{ animation: click ? "test2 1s forwards" : "none" }}></div>
    </MenuButton>
  );
}
