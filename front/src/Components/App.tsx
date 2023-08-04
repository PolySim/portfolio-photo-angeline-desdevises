import Header from "@/Components/Header";
import { MainContext } from "@/context.ts";
import { useEffect, useState } from "react";
import { Reports } from "@/type.ts";
import getReportsInformation from "@/API/pages_information.ts";
import { Route, Routes } from "react-router-dom";
import Home from "@/Components/Home";
import Footer from "@/Components/Footer";
import Contact from "@/Components/Contact";

export default function App(): JSX.Element {
  const [reports, setReports] = useState<Reports>([
    {
      index: 0,
      title: "",
      article: "",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getReportsInformation();
        setReports(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    void getData();
  }, []);

  return (
    <>
      <MainContext.Provider value={{ reports }}>
        <Header />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </MainContext.Provider>
    </>
  );
}
