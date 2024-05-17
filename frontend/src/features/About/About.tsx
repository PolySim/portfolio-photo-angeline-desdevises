import React, { useEffect } from "react";
import { useAbout } from "@/store/aboutStore.ts";
import AboutImg from "@/assets/about.jpeg";

const About: React.FC = () => {
  const biography = useAbout((state) => state.biography);
  const initBiography = useAbout((state) => state.initBiography);

  useEffect(() => {
    if (!biography) initBiography();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 w-full max-w-7xl mx-auto p-8 md:p-10">
      <div className="md:sticky top-6 w-full h-max">
        <img src={AboutImg} alt="Angeline Desdevises" />
      </div>
      <div className="text-gray-600 font-helvetica">
        <h1 className="text-gray-900 text-4xl md:text-6xl font-bold">
          Biographie (fr)
        </h1>
        <p className="text-xs font-medium text-gray-600 mt-3 md:mt-5 leading-5">
          {biography?.fr}
        </p>
        <h4 className="mt-6 text-lg md:text-2xl font-semibold">
          Biography (en)
        </h4>
        <p className="text-xs font-medium text-gray-600 mt-3 leading-5">
          {biography?.en}
        </p>
      </div>
    </div>
  );
};

export default About;
