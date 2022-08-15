import React, { useState, useEffect } from "react";
import FirstPage from "src/component/FirstPage";
import Header from "src/container/Header";
import Portfolio from "src/component/Portfolio";
import Images from "src/container/DisplayImage";
import { Routes, Route } from "react-router-dom";
import { MainContext } from "src/context";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [click, setClick] = useState<boolean>(false);
  const [displayImage, setDisplayImage] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <MainContext.Provider
        value={{
          setDisplayImage,
        }}
      >
        {displayImage ? (
          <></>
        ) : (
          <Header width={width} click={click} setClick={setClick} />
        )}
        {click ? (
          <></>
        ) : (
          <Routes>
            <Route path="*" element={<FirstPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<Images />} />
          </Routes>
        )}
      </MainContext.Provider>
    </>
  );
}

export default App;
