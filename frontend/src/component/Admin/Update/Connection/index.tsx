import React, { useContext, useRef } from "react";
import { AdminConnection } from "src/styled";
import { MainContext } from "src/context";

export default function AdminConnectionView(): JSX.Element {
  const { setConnected } = useContext(MainContext);
  const ref: any = useRef();

  const checkValid: (text: string) => void = (text) => {
    //if (text === "SppADlmdt_2022!") {
    if (text === "a") {
      setConnected(true);
    }
  };

  return (
    <AdminConnection>
      <div>
        <div>Rentre le mot de passe</div>
        <input type="text" ref={ref} />
        <div
          onClick={() => {
            checkValid(ref.current.value || "");
          }}
        >
          Valider
        </div>
      </div>
    </AdminConnection>
  );
}
