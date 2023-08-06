import React from "react";
import { FullScreenType } from "@/type.ts";
import { CrossStyle } from "@/Components/Portfolio/styled.ts";

export default function Cross({
  setFullScreen,
}: {
  setFullScreen: React.Dispatch<React.SetStateAction<FullScreenType>>;
}): JSX.Element {
  return (
    <CrossStyle
      onClick={() => setFullScreen((curr) => ({ ...curr, open: false }))}
    >
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M20 20L4 4.00003M20 4L4.00002 20"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </CrossStyle>
  );
}
