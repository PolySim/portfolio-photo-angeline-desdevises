import React, { useState, useEffect } from "react";
import FirstPage from "src/component/FirstPage";
import Header from "src/container/Header";
import Portfolio from "src/component/Portfolio";
import { Routes, Route } from "react-router-dom";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header width={width} click={click} setClick={setClick} />
      {click ? (
        <></>
      ) : (
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      )}
    </>
  );
}

export default App;
