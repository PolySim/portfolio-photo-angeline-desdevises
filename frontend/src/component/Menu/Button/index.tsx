import React, { useState } from "react";
import { MenuButton } from "src/styled";

export default function Button({
  click,
  setClick,
}: {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <MenuButton
      onClick={() => {
        setClick(!click);
      }}
    >
      <div style={{ animation: click ? "barre1 1s forwards" : "none" }}></div>
      <div style={{ animation: click ? "barre2 0.6s forwards" : "none" }}></div>
      <div style={{ animation: click ? "barre3 1s forwards" : "none" }}></div>
    </MenuButton>
  );
}
