import Header from "@/features/Header/Header.tsx";
import { Route, Routes } from "react-router-dom";
import Home from "@/features/Home/Home.tsx";
import Footer from "@/features/Footer/Footer.tsx";
import About from "@/features/About/About.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/apropos" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
