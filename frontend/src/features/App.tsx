import Header from "@/features/Header/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { useReport } from "@/store/reportStore.ts";
import { useEffect } from "react";
import Home from "@/features/Home/Home.tsx";
import Footer from "@/features/Footer/Footer.tsx";

function App() {
  const initReports = useReport((state) => state.initReports);

  useEffect(() => {
    initReports();
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
