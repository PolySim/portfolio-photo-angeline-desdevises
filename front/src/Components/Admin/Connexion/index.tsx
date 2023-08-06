import { ConnexionStyle } from "@/Components/Admin/styled.ts";
import React, { useEffect, useRef } from "react";

const PASSWORD = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_CONNECT_MDP_PROD
  : import.meta.env.VITE_PUBLIC_CONNECT_MDP_DEV;

export default function Connexion({
  setIsConnexion,
}: {
  setIsConnexion: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const validPassword: (element: HTMLInputElement | null) => boolean = (
    element,
  ) => {
    if (element) {
      return element.value === PASSWORD;
    }
    return false;
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <ConnexionStyle>
      <div>
        <div>Rentre le mot de passe</div>
        <input type="text" ref={inputRef} />
        <div onClick={() => setIsConnexion(validPassword(inputRef.current))}>
          Valider
        </div>
      </div>
    </ConnexionStyle>
  );
}
