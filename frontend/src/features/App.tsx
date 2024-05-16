import Header from "@/features/Header/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { useReport } from "@/store/reportStore.ts";
import { useEffect } from "react";

function App() {
  const initReports = useReport((state) => state.initReports);

  useEffect(() => {
    initReports();
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<div />} />
      </Routes>
    </>
  );
}

export default App;
