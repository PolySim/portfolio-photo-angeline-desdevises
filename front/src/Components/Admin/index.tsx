import Connexion from "@/Components/Admin/Connexion";
import AdminMenu from "@/Components/Admin/Menu";
import React from "react";

export default function Admin({
  isConnected,
  setIsConnected,
}: {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <>
      {isConnected ? (
        <AdminMenu />
      ) : (
        <Connexion setIsConnexion={setIsConnected} />
      )}
    </>
  );
}
