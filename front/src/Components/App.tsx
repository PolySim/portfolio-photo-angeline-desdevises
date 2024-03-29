import Header from "@/Components/Header";
import { MainContext } from "@/context.ts";
import { useEffect, useState } from "react";
import { Reports } from "@/type.ts";
import getReportsInformation from "@/API/pages_information.ts";
import { Route, Routes } from "react-router-dom";
import Home from "@/Components/Home";
import Footer from "@/Components/Footer";
import Contact from "@/Components/Contact";
import About from "@/Components/About";
import Portfolio from "@/Components/Portfolio";
import Admin from "@/Components/Admin";
import Edit from "@/Components/Admin/Edit";
import ReportageOrder from "@/Components/Admin/ReportageOrder";
import AdminAbout from "@/Components/Admin/About";

export default function App(): JSX.Element {
  const [isConnected, setIsConnected] = useState<boolean>(false);
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
      } catch (error) {
        console.log(error);
      }
    };
    void getData();
  }, []);

  return (
    <>
      <MainContext.Provider value={{ reports, setReports }}>
        <Header />

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/portfolio/:id" element={<Portfolio />} />
          <Route
            path="/admin"
            element={
              <Admin
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route
            path="/admin/about"
            element={
              isConnected ? (
                <AdminAbout />
              ) : (
                <Admin
                  isConnected={isConnected}
                  setIsConnected={setIsConnected}
                />
              )
            }
          />
          <Route
            path="/admin/0"
            element={
              isConnected ? (
                <ReportageOrder />
              ) : (
                <Admin
                  isConnected={isConnected}
                  setIsConnected={setIsConnected}
                />
              )
            }
          />
          <Route
            path="/admin/:id"
            element={
              isConnected ? (
                <Edit />
              ) : (
                <Admin
                  isConnected={isConnected}
                  setIsConnected={setIsConnected}
                />
              )
            }
          />
        </Routes>

        <Footer />
      </MainContext.Provider>
    </>
  );
}
