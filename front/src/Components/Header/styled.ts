import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "@/constCSS.ts";

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5vh;
  width: 100%;
  font-size: 32px;

  @media screen and (max-width: 700px) {
    font-size: 25px;
    justify-content: start;
    align-items: center;
    margin-left: 24px;
    height: 64px;

    > a {
      margin-top: 0;
    }
  }
`;

export const TitleLink = styled(Link)`
  transition: color 0.2s;
  text-decoration: none;
  color: ${colors.black};
  font-family: "Helvetica, M PLUS 2", sans-serif;
  font-weight: bold;
  margin-bottom: 20px;

  &:hover {
    color: ${colors.lightBleu};
  }

  @media screen and (max-width: 700px) {
    margin-top: 35px;
    margin-bottom: 0;
  }
`;

export const NavBarLaptopStyle = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;

  > span {
    opacity: 0.15;
    font-size: 40%;
    margin: 0 25px 20px;
  }
`;

export const ReportsLink = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: ${colors.black};
  font-family: "Helvetica, M PLUS 2", sans-serif;
  font-weight: bold;
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border-radius: 15px;

  &:hover {
    background-color: #eee;
  }

  @media screen and (max-width: 700px) {
    justify-content: center;
    margin-top: 20px;
    height: auto;
    padding: 0;

    &:hover {
      background-color: white;
      color: ${colors.lightBleu};
    }
  }
`;

export const ReportsTitle = styled.p`
  transition: color 0.2s;
  color: ${colors.black};
  font-family: "Helvetica, M PLUS 2", sans-serif;
  font-weight: bold;

  &:hover {
    color: ${colors.lightBleu};
  }
`;

export const Reports = styled.div`
  position: relative;

  &:hover {
    color: ${colors.lightBleu};

    p {
      color: ${colors.lightBleu};
    }

    > div:nth-of-type(2) {
      display: flex;
    }
  }

  > div:nth-of-type(1) {
    margin-bottom: 20px;
  }

  > div:nth-of-type(2) {
    position: absolute;
    left: -10px;
    top: 18.5px;
    display: none;
    flex-direction: column;

    width: max-content;
    padding-right: 20px;
    padding-top: 12px;

    background-color: white;
  }
`;

export const NavBarPhoneStyle = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.$open ? "translateX(0)" : "translateX(-100%)"};

  p {
    margin-top: 60px;
  }
`;

export const ButtonOpenMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 36px;
  right: 24px;
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.$open ? "translateX(0)" : "translateX(100vw)"};

  > span {
    position: absolute;
    background-color: ${colors.black};
    height: 2px;
    width: 50px;
    transition:
      transform 0.3s ease-out,
      opacity 0.1s ease-out;
  }

  > span:nth-of-type(1) {
    transform: ${(props) =>
      props.$open ? "translateY(0) rotate(135deg)" : "translateY(-10px)"};
  }

  > span:nth-of-type(2) {
    opacity: ${(props) => (props.$open ? "0" : "1")};
  }

  > span:nth-of-type(3) {
    transform: ${(props) =>
      props.$open ? "translateY(0) rotate(-135deg)" : "translateY(10px)"};
  }
`;
