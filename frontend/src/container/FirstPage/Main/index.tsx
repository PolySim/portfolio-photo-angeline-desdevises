import React, { useEffect, useState } from "react";
import { ImageMain } from "src/styled";

export default function Main(): JSX.Element {
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    if (!load) {
      setTimeout(() => setLoad(true), 300);
    }
  }, []);
  return (
    <ImageMain
      style={{ opacity: load ? "1" : "0" }}
      src={require("./portrait.jpg")}
      alt="Angeline Desdevises"
    />
  );
}
