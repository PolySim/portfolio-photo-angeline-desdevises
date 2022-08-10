import React from "react";
import { GridPortfolio } from "src/styled";
import Share from "src/component/Share";

export default function Portfolio(): JSX.Element {
  return (
    <>
      <GridPortfolio>
        <div style={{ animationDelay: "0s" }}></div>
        <div style={{ animationDelay: "0.2s" }}></div>
        <div style={{ animationDelay: "0.4s" }}></div>
        <div style={{ animationDelay: "0.6s" }}></div>
        <div style={{ animationDelay: "0.8s" }}></div>
        <div style={{ animationDelay: "1s" }}></div>
        <div style={{ animationDelay: "1.2s" }}></div>
        <div style={{ animationDelay: "1.4s" }}></div>
        <div style={{ animationDelay: "1.6s" }}></div>
        <div style={{ animationDelay: "1.8s" }}></div>
        <div style={{ animationDelay: "2s" }}></div>
        <div style={{ animationDelay: "2.2s" }}></div>
        <div style={{ animationDelay: "2.4s" }}></div>
        <div style={{ animationDelay: "2.6s" }}></div>
        <div style={{ animationDelay: "2.8s" }}></div>
        <div style={{ animationDelay: "3s" }}></div>
        <div style={{ animationDelay: "3.2s" }}></div>
        <div style={{ animationDelay: "3.4s" }}></div>
      </GridPortfolio>
      <Share footer={true} />
    </>
  );
}
