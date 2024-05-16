import React from "react";
import SocialNetwork from "@/features/SocialNetwork/SocialNetwork.tsx";

const Footer: React.FC = () => {
  return (
    <>
      <SocialNetwork className="mt-10" />
      <footer className="flex flex-col justify-center items-center w-full pb-20 mt-5 text-xs font-light text-gray-700">
        <p>Reproduction interdite - Copyright Angeline Desdevises</p>
        <p className="mt-2">
          Développé par{" "}
          <a
            href="https://www.simondesdevises.com"
            target="_blank"
            className="underline"
          >
            Simon Desdevises
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
