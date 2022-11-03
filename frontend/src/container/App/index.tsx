import { useState, useEffect } from "react";
import FirstPage from "src/component/FirstPage";
import Header from "src/container/Header";
import Grid from "src/component/Portfolio";
import Images from "src/container/DisplayImage";
import { Routes, Route } from "react-router-dom";
import { MainContext } from "src/context";
import APropos from "src/component/A_Propos";
import Contact from "src/component/Contact";
import pages_information from "src/API/pages_information";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [click, setClick] = useState<boolean>(false);
  const [displayImage, setDisplayImage] = useState<boolean>(false);
  const [pagesInformation, setPagesInformation] = useState<
    [string, number, string][]
  >([]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function getData(): Promise<void> {
      const information = await pages_information();
      setPagesInformation(information);
    }
    getData();
  }, []);

  return (
    <>
      <MainContext.Provider
        value={{
          displayImage,
          setDisplayImage,
          pagesInformation,
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
            <Route path="/portfolio" element={<Grid name="portfolio" />} />
            <Route path="/reportage" element={<Grid name="reportage" />} />
            <Route
              path="/reportage/:numero"
              element={<Grid name="reportage" />}
            />
            <Route path="/portraits" element={<Grid name="portrait" />} />
            <Route path="/publications" element={<Grid name="publication" />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/:name/:id" element={<Images />} /> */}
          </Routes>
        )}
      </MainContext.Provider>
    </>
  );
}

export default App;
