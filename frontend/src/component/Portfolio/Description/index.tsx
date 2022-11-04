import React, { useContext } from "react";
import { Description } from "src/styled";
import { MainContext } from "src/context";

export default function DescriptionView({
  text,
  setFocus,
}: {
  text: string;
  setFocus: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const { setDisplayImage } = useContext(MainContext);
  return (
    <Description
      onClick={() => {
        setFocus(-1);
        setDisplayImage(true);
      }}
    >
      <div>{text}</div>
      <div>READ MORE</div>
    </Description>
  );
}
