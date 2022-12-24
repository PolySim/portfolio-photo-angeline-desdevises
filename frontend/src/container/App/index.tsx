import { useState, useEffect } from "react";
import FirstPage from "src/component/FirstPage";
import Header from "src/container/Header";
import Grid from "src/component/Portfolio";
import { Routes, Route } from "react-router-dom";
import { MainContext } from "src/context";
import APropos from "src/component/A_Propos";
import Contact from "src/component/Contact";
import pages_information from "src/API/pages_information";
import AdminView from "src/component/Admin/Update";
import UpdateAlbumView from "src/component/Admin/Update/UpdateAlbum";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [click, setClick] = useState<boolean>(false);
  const [displayImage, setDisplayImage] = useState<boolean>(false);
  const [connected, setConnected] = useState<boolean>(false);
  const [pagesInformation, setPagesInformation] = useState<
    [number, string, string][]
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
          connected,
          setConnected,
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
            <Route path="/portfolio/:numero" element={<Grid />} />
            <Route path="/reportage/:numero" element={<Grid />} />
            <Route path="/portraits/:numero" element={<Grid />} />
            <Route path="/publications/:numero" element={<Grid />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminView />} />
            <Route path="/admin/:id" element={<UpdateAlbumView />} />
          </Routes>
        )}
      </MainContext.Provider>
    </>
  );
}

export default App;
