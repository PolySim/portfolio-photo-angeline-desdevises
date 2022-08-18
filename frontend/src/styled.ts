import styled from "styled-components";

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 40%;
  margin: 0 10px 0 auto;
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

export const H1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5vh;
  width: 100%;

  h1 {
    transition: opacity 0.5s;
  }

  h1:hover {
    color: #7cc4c5;
  }
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
    color: #000;
  }

  a:hover {
    color: #7cc4c5;
  }

  > div:nth-of-type(2n) {
    opacity: 0.15;
    font-size: 40%;
    margin-left: 25px;
  }

  > div {
    margin-bottom: 20px;
  }

  > div:nth-of-type(3) {
    position: relative;
  }

  > div:nth-of-type(3) {
    background: url(https://bucket1.format-assets.com/theme_versions/8549292/assets/images/arrow-down.svg)
      right 64% no-repeat;
    padding-right: 30px;
  }
`;

export const ShareButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  a {
    position: relative;
    top: 25%;
  }

  svg {
    transition: transform 0.2s;
    margin-right: 30px;
  }

  svg:hover {
    fill: #7cc4c5;
    transform: rotate(-20deg) scale(1.2);
  }

  p {
    position: relative;
    top: 31%;
    font-size: 100%;
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
  top: 90%;
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
  }
`;

export const GridPortfolio = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template: repeat(6, max-content) / repeat(3, max-content);

  img {
    width: 32vw;
    height: auto;
    margin: 0.5vw;
    background-color: bisque;
    opacity: 0;
    animation: ApparitionImage 0.6s forwards;
  }

  div {
    width: 32vw;
    height: 100px;
    background-color: aliceblue;
  }

  a {
    transition: transform 0.25s;
    :hover {
      transform: scale(0.95);
      z-index: 10;
    }
  }

  @media screen and (max-width: 520px) {
    grid-template: repeat(8, max-content) / repeat(2, max-content);
    img {
      width: 48vw;
      margin: 1vw;
    }
  }

  @media screen and (min-width: 1100px) {
    div {
      width: 360px;
      margin: 6px;
    }
  }
`;

export const DisplayImage = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;

  > div:nth-of-type(1) {
    display: flex;
    justify-content: right;
    align-items: top;
    position: absolute;
    width: 100%;
    height: 100%;

    a {
      margin-right: 30px;
      margin-top: 30px;
      transition: opacity 0.5s ease-in-out;
      height: min-content;
      z-index: 100;
      cursor: pointer;
    }
  }

  > div:nth-of-type(2) {
    display: flex;
    position: absolute;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: transparent;

    button {
      display: flex;
      align-items: center;
      width: 35%;
      height: 100%;
      background-color: transparent;
      border: none;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      z-index: 10;
      cursor: pointer;

      div {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #f4e9ce;
      }
    }

    button:nth-of-type(1) {
      justify-content: left;
      cursor: default;

      div {
        margin-left: 40px;
      }

      :hover {
        opacity: 1;
        cursor: pointer;
      }

      @media screen and (max-width: 770px) {
        opacity: 0;
      }
    }

    button:nth-of-type(2) {
      justify-content: right;
      cursor: default;

      div {
        margin-right: 40px;
      }

      :hover {
        opacity: 1;
        cursor: pointer;
      }

      @media screen and (max-width: 770px) {
        opacity: 0;
      }
    }
  }
`;
