import React from "react";
import HomeImg from "@/assets/home.jpg";

const Home: React.FC = () => {
  return (
    <div className="w-screen max-w-6xl mx-auto mt-5 md:mt-10">
      <img src={HomeImg} alt="Home page image" />
    </div>
  );
};

export default Home;
