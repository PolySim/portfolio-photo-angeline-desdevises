import styled from "styled-components";

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center;

  div:nth-of-type(n) {
    height: 50px;
    width: 200px;
    background-color: #000;
    margin-bottom: 50px;
    border-radius: 15px;
  }
`;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5vh;
  width: 100%;
`;

export const NavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
  a {
    width: max-content;
    margin-left: 25px;
    text-decoration: none;
    color: #000;
  }

  > a:nth-of-type(1) {
    margin-left: 0;
  }

  > div {
    opacity: 0.15;
    font-size: 40%;
    margin-left: 25px;
  }

  > div:nth-of-type(2) {
    opacity: 1;
    font-size: 100%;
    margin-left: 0;
    position: relative;
  }

  > div:nth-of-type(2) {
    background: url(https://bucket1.format-assets.com/theme_versions/8549292/assets/images/arrow-down.svg)
      right 64% no-repeat;
    padding-right: 30px;
  }
`;

export const ShareButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 230px;
  width: 100%;

  a {
    position: relative;
    top: 25%;
    width: 50px;
    height: 10%;
  }

  img {
    height: 100%;
    width: auto;
  }

  p {
    position: relative;
    top: 27%;
    font-size: 90%;
  }
`;

export const ImageMain = styled.img`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1100px;
  height: auto;
  transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export const Footer = styled.div`
  position: absolute;
  top: 50%;
  color: #6e6a61;
  font-size: 80%;
`;

export const ArticleNavBar = styled.div`
  position: absolute;
  left: 25px;
  width: max-content;
  background-color: #fff;
  z-index: 10;

  div {
    z-index: 10;
    height: 30px;
    width: 100%;
  }

  div:nth-of-type(1) {
    margin-top: 3%;
  }
`;
