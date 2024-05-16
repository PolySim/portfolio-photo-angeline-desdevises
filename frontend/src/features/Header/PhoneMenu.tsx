import React, { useEffect, useState } from "react";
import { useReport } from "@/store/reportStore.ts";
import { cn } from "@/lib/utils.ts";

const PhoneMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const reports = useReport((state) => state.reports);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen((curr) => !curr)}
        className={`flex z-10 md:hidden relative w-[50px] mt-1 ${isOpen ? "menu-open" : "menu-close"}`}
      >
        <span />
        <span />
        <span />
      </div>
      <div
        className={cn(
          "flex flex-col justify-center items-center gap-10 absolute top-0 left-0 right-0 bottom-0 transition-transform duration-300 bg-white font-bold font-helvetica text-md text-center",
          {
            "-translate-x-full": !isOpen,
          },
        )}
      >
        <a href="/portfolio/3" onClick={() => setIsOpen((curr) => !curr)}>
          PORTFOLIO
        </a>
        <div className="flex flex-col w-full justify-center items-center gap-5">
          <p className="text-md font-medium">REPORTAGE</p>
          {reports.map((report, i) => (
            <a
              key={`${i}${report.title}`}
              href={`/portfolio/${report.index}`}
              onClick={() => setIsOpen((curr) => !curr)}
            >
              {report.title}
            </a>
          ))}
        </div>
        <a href="/portfolio/1" onClick={() => setIsOpen((curr) => !curr)}>
          PORTRAITS
        </a>
        <a href="/portfolio/2" onClick={() => setIsOpen((curr) => !curr)}>
          PUBLICATIONS
        </a>
        <a href="/contact" onClick={() => setIsOpen((curr) => !curr)}>
          CONTACT
        </a>
        <a href="/apropos" onClick={() => setIsOpen((curr) => !curr)}>
          A PROPOS
        </a>
      </div>
    </>
  );
};

export default PhoneMenu;
