import React from "react";
import { useReport } from "@/store/reportStore.ts";

const NavBar: React.FC = () => {
  const reports = useReport((state) => state.reports);

  return (
    <div className="hidden md:flex flex-wrap justify-center items-center w-9/12 mt-8 mx-auto font-bold font-helvetica text-md text-center">
      <a href="/portfolio/3" className="hover:text-customblue-300 transition">
        PORTFOLIO
      </a>
      <span className="opacity-15 text-40 mx-6 ">⚫</span>
      <div className="flex flex-col relative group">
        <p className="group-hover:text-customblue-300 transition">REPORTAGE</p>
        <div className="hidden absolute w-max top-0 mt-5 pt-3 -left-3 text-left group-hover:flex flex-col gap-1 bg-white">
          {(reports || []).map((report, i) => (
            <a
              key={`${i}${report.title}`}
              href={`/portfolio/${report.index}`}
              className="hover:bg-gray-100 transition px-3 py-0.5 rounded-lg"
            >
              {report.title}
            </a>
          ))}
        </div>
      </div>
      <span className="opacity-15 text-40 mx-6 ">⚫</span>
      <a href="/portfolio/1" className="hover:text-customblue-300 transition">
        PORTRAITS
      </a>
      <span className="opacity-15 text-40 mx-6 ">⚫</span>
      <a href="/portfolio/2" className="hover:text-customblue-300 transition">
        PUBLICATIONS
      </a>
      <span className="opacity-15 text-40 mx-6 ">⚫</span>
      <a href="/contact" className="hover:text-customblue-300 transition">
        CONTACT
      </a>
      <span className="opacity-15 text-40 mx-6 ">⚫</span>
      <a href="/apropos" className="hover:text-customblue-300 transition">
        A PROPOS
      </a>
    </div>
  );
};

export default NavBar;
