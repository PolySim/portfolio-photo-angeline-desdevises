import React, { Suspense, useState } from "react";
import { H1 } from "src/styled";
import Navigation from "src/component/Menu/NavBar";
import Share from "src/component/Share";
import NavResponsive from "src/container/NavResponsive";
const Temp = React.lazy(() => import("src/container/FirstPage/Main"));

export default function FirstPage(): JSX.Element {
  const [click, setClick] = useState<boolean>(false);
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
