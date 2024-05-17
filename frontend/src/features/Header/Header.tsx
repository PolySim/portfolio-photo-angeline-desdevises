import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PhoneMenu from "@/features/Header/PhoneMenu.tsx";
import NavBar from "@/features/Header/NavBar.tsx";
import SocialNetwork from "@/features/SocialNetwork/SocialNetwork.tsx";
import { useReport } from "@/store/reportStore.ts";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const reports = useReport((state) => state.reports);
  const initReports = useReport((state) => state.initReports);

  useEffect(() => {
    if (!reports) initReports();
  }, [reports]);

  return (
    <>
      <div className="flex justify-between md:justify-center p-6">
        <h1
          onClick={() => navigate("/")}
          className="w-fit font-helvetica font-bold text-2xl md:text-4xl mt-0 md:mt-8 text-black hover:text-customblue-300 transition cursor-pointer"
        >
          Angeline Desdevises
        </h1>
        <PhoneMenu />
      </div>
      <NavBar />
      <SocialNetwork className="hidden md:flex mt-10 mb-10" />
    </>
  );
};

export default Header;
