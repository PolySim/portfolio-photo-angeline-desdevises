import React, { useContext, useRef, useEffect } from "react";
import { AdminConnection } from "src/styled";
import { MainContext } from "src/context";

const MDP = process.env.REACT_APP_CONNECT_MDP;

export default function AdminConnectionView(): JSX.Element {
  const { setConnected } = useContext(MainContext);
  const ref: any = useRef();

  const checkValid: (text: string) => void = (text) => {
    if (text === MDP) {
      setConnected(true);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

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
