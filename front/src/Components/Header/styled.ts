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
`;

export const TitleLink = styled(Link)`
  transition: color 0.2s;
  text-decoration: none;
  color: ${colors.black};
  font-family: "Helvetica, M PLUS 2", sans-serif;
  font-weight: bold;
  margin-bottom: 20px;

  &:hover {
    color: #7cc4c5;
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
`;

export const ReportsTitle = styled.p`
  transition: color 0.2s;
  color: ${colors.black};
  font-family: "Helvetica, M PLUS 2", sans-serif;
  font-weight: bold;

  &:hover {
    color: #7cc4c5;
  }
`;

export const Reports = styled.div`
  position: relative;

  &:hover {
    color: #7cc4c5;

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
