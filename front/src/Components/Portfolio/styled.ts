import styled from "styled-components";
import { colors } from "@/constCSS.ts";

export const PortfolioStyle = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: min(100vw, 1200px);
  margin: 0 auto;
`;

export const SmallImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  width: 30%;
  transition: transform 0.2s linear;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(95%);

    span {
      transform: translateY(-100%);
      opacity: 1;
    }
  }

  img {
    width: 100%;
  }

  span {
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    width: 100%;
    text-align: center;
    padding: 6px 0;
    opacity: 0;
    transform: translateY(-50%);
    transition: all 0.2s linear;
  }

  p:nth-of-type(1) {
    width: 80%;
    font-size: 16px;
    color: #333;
  }

  p:nth-of-type(2) {
    margin-top: 6px;
    font-weight: bold;
    font-size: 14px;
    color: #070707;
    padding-bottom: 24px;
  }

  @media screen and (max-width: 700px) {
    width: 45%;
  }
`;

export const FullScreenStyle = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  scroll-snap-type: x mandatory;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
  background-color: white;
`;

export const FullImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  min-width: 100vw;
  min-height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  p {
    width: 60%;
    max-height: 100%;
    padding: min(48px, 14vh);
    font-size: 16px;
    color: ${colors.gray};
    box-shadow: 1px 1px 4px rgb(0 0 0 / 10%);
    overflow-y: scroll;
    z-index: 100;
  }
`;

export const CrossStyle = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;

  svg {
    width: 30px;
    height: 30px;
  }
`;
