import React, { Suspense, useState, useEffect, useContext } from "react";
import { MainContext } from "src/context";
import Share from "src/component/Share";
const Temp = React.lazy(() => import("src/container/FirstPage/Main"));

export default function FirstPage(): JSX.Element {
  const { setDisplayImage } = useContext(MainContext);
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    setDisplayImage(false);
  }, []);

  return (
    <>
      {click ? (
        <></>
      ) : (
        <>
          {" "}
          <Suspense
            fallback={
              <div
                style={{ height: "100vh", width: "100vw", textAlign: "center" }}
              >
                {" "}
                LOADING{" "}
              </div>
            }
          >
            <Temp />
          </Suspense>
          <Share footer={true} />{" "}
        </>
      )}
    </>
  );
}
