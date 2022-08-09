import React, { useState, useEffect } from "react";
import FirstPage from "src/component/FirstPage";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return <FirstPage width={width} />;
}

export default App;
