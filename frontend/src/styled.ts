import styled from "styled-components";

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 40%;
  left: 50%;
  transform-origin: center;
  width: 40px;
  height: 40px;

  div:nth-of-type(n) {
    height: 2px;
    width: 70%;
    background-color: #000;
    margin-bottom: 5px;
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
  color: #555555;
  font-size: 80%;
`;

export const ArticleNavBar = styled.div`
  position: absolute;
  left: 15px;
  width: max-content;
  background-color: #fff;
  z-index: 10;

  div {
    z-index: 10;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
    padding-left: 10px;

    :hover {
      background-color: #eee;
    }
  }

  div:nth-of-type(1) {
    margin-top: 3%;
  }
`;

export const ArticleNavBarPhone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 64px);
  animation: NavBarPhone 0.45s forwards;
  overflow-y: scroll;

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    margin-top: 35px;
    width: 100%;
    text-align: center;

    :hover {
      transform: scale(1.2);
      transition: transform 0.2s;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 40px;
    width: 100%;

    a {
      font-weight: bold;
      margin-top: 20px;
      width: 100%;
      text-align: center;

      :hover {
        transform: scale(1.2);
        transition: transform 0.2s;
      }
    }

    a:nth-of-type(1) {
      font-weight: normal;
      font-size: 90%;
      margin-top: 0;

      :hover {
        transform: scale(1);
      }
    }
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 64px;

  h1 {
    display: flex;
    align-items: center;
    position: relative;
    left: 15px;
    height: 100%;
    font-size: 25px;
    color: #232323;
  }
`;
