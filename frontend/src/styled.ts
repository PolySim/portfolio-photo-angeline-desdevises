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
    height: fit-content;
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

  a {
    z-index: 10;
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
    padding-left: 10px;
    margin-left: 0;

    :hover {
      background-color: #eee;
    }
  }

  a:nth-of-type(1) {
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
  margin-bottom: 24px;

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
  margin-bottom: 24px;

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
  grid-template-columns: repeat(3, max-content);

  img {
    width: 32vw;
    height: auto;
    margin: 0.5vw;
  }

  a {
    transition: transform 0.25s;
    min-height: 21.5vw;
    height: fit-content;
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

    a {
      min-height: 32.5vw;
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

export const Propos = styled.div`
  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media screen and (max-width: 640px) {
      flex-direction: column;
    }

    > div:nth-of-type(1) {
      display: flex;
      justify-content: center;
      position: sticky;
      top: 3%;
      width: 50%;
      height: max-content;
      img {
        width: 80%;
        height: auto;
      }

      @media screen and (max-width: 640px) {
        width: 100%;
        position: relative;
        img {
          width: 90%;
        }
      }
    }

    > div:nth-of-type(2) {
      padding-right: 4%;
      width: 46%;

      h1 {
        font-size: 57px;
        color: #0b0b0b;
        margin-bottom: 24px;
      }

      h4 {
        margin-top: 50px;
        font-size: 20px;
        color: #555555;
      }

      > div {
        margin-top: 12px;
        line-height: 20.4px;
        font-size: 12px;
        color: #555555;
      }

      @media screen and (max-width: 640px) {
        width: 90%;
        padding: 0 5%;
        h1 {
          margin-top: 20px;
          font-size: max(12px, 6vw);
        }
      }
    }
  }
`;

export const ContactPage = styled.div`
  > div:nth-of-type(1) {
    width: 85%;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  > div:nth-of-type(2) {
    h2 {
      text-align: center;
      font-size: 34px;
      margin-top: 30px;
    }

    > p {
      width: 50%;
      margin: 30px auto 0;
      line-height: 150%;
      font-size: 12px;
      text-align: center;
      color: #555555;
    }

    > div {
      display: flex;
      width: 50%;
      margin: 20px auto 0;
      > div:nth-of-type(1) {
        width: 50%;
        p {
          font-size: 12px;
          color: #555555;
        }

        p:nth-of-type(2n + 1) {
          font-weight: bold;
          font-size: 15px;
          margin-top: 24px;
        }

        p:nth-of-type(2n) {
          margin-top: 6px;
        }
      }

      > div:nth-of-type(2) {
        margin-left: 20%;
        width: 100%;
        height: max-content;

        > form {
          border: 1px solid #555555;
          width: 100%;
          height: max-content;
          input {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border: none;
            border-bottom: 1px solid #555555;
            color: #555555;
            padding: 18px;
            font-size: 14px;
            height: 48px;
            outline: none;
          }

          textarea {
            box-sizing: border-box;
            border: none;
            width: 100%;
            padding: 18px;
            outline: none;
            overflow-wrap: break-word;
            resize: vertical;
            height: 130px;
          }
        }
        > input {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          cursor: pointer;
          box-sizing: border-box;
          margin-top: 24px;
          border: 1px solid #555555;
          height: 50px;
          width: 75%;
          color: #555555;
          background-color: transparent;
          transition: all 0.4s;

          :hover {
            color: #000;
            background-color: #7cc4c5;
          }
        }
      }
    }

    @media screen and (max-width: 770px) {
      h2 {
        font-size: 8vw;
      }

      > p {
        width: 85%;
        text-align: left;
      }

      > div {
        flex-direction: column;
        width: 85%;

        > div:nth-of-type(2) {
          margin-left: 0;
          margin-top: 24px;

          > input {
            width: 50%;
            font-size: 4vw;
            background-color: #7cc4c5;
            color: #000;
          }
        }
      }
    }
  }
`;
