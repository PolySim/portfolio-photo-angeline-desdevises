import { useState } from "react";
import Connexion from "@/Components/Admin/Connexion";

export default function Admin(): JSX.Element {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  return (
    <>{isConnected ? <></> : <Connexion setIsConnexion={setIsConnected} />}</>
  );
}
