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
  a,
  p {
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
  text-align: center;
  p:nth-of-type(2) {
    margin-top: 6px;
    margin-bottom: 24px;
  }
  a {
    text-decoration: underline;

    color: #555555;
  }
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

  a,
  p {
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

    p:nth-of-type(1) {
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

  > div {
    img {
      width: 32vw;
      height: auto;
      margin: 0.5vw;
    }

    div {
      width: 33vw;
    }

    > div {
      transition: transform 0.25s;
      min-height: 21.5vw;
      height: fit-content;
      cursor: pointer;

      :hover {
        transform: scale(0.95);
        z-index: 10;
      }
    }
  }

  @media screen and (max-width: 520px) {
    grid-template: repeat(8, max-content) / repeat(2, max-content);
    > div {
      img {
        width: 48vw;
        margin: 1vw;
      }

      div {
        width: 50vw;
      }
    }
  }

  @media screen and (min-width: 1100px) {
    > div {
      div {
        width: 360px;
        margin: 6px;
      }

      img {
        width: 360px;
      }
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

    div {
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
      width: 25%;
      height: 100%;
      background-color: transparent;
      border: none;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      z-index: 10;
      cursor: pointer;
    }

    button:nth-of-type(1):hover {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.0001) 100%
      );
    }
    button:nth-of-type(2):hover {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.0001) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
    }

    svg {
      stroke: white;
      fill: white;
      opacity: 0.8;
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

      svg {
        transform: rotate(180deg);
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

export const Description = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  div:nth-of-type(1) {
    width: 80%;
    font-size: 16px;
    color: #333;
  }
  div:nth-of-type(2) {
    font-weight: bold;
    font-size: 14px;
    color: #070707;
    padding-bottom: 24px;
  }
`;

export const BigDescription = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  div {
    width: 60%;
    max-height: 100%;
    padding: min(48px, 14vh);
    font-size: 16px;
    color: #555;
    box-shadow: 1px 1px 4px rgb(0 0 0 / 10%);
    overflow-y: scroll;
    z-index: 100;
  }
`;

export const AdminConnection = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    /* height: 400px; */
    border: 1px solid #ccc;
    border-radius: 8px;

    > div:nth-of-type(1) {
      padding: 10px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    > div:nth-of-type(2) {
      cursor: pointer;
      margin-bottom: 24px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #eee;
    }
    input {
      outline: none;
      margin: 24px 0;
      padding: 4px;
    }
  }
`;

export const SelectAlbum = styled.main`
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > a {
      margin: 12px 24px;
      padding: 6px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #eee;
      cursor: pointer;
      color: #000;
      text-decoration: none;
    }
  }
`;

export const UpdateAlbum = styled.main`
  display: flex;
  justify-content: space-between;

  > div {
    width: 45%;
  }

  > div:nth-of-type(1) {
    margin: 12px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: fit-content;

    /* Titre */
    > div:nth-of-type(1) {
      margin-bottom: 24px;

      > div:nth-of-type(1) {
        margin-bottom: 12px;
      }
    }

    /* Content */
    > div:nth-of-type(2) {
      margin-bottom: 24px;

      > div:nth-of-type(1) {
        margin-bottom: 12px;
      }
    }

    /* Button */
    > div:nth-of-type(3) {
      display: flex;

      > div:nth-of-type(1) {
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #eee;
        padding: 6px 12px;
        margin-right: 24px;
        cursor: pointer;
      }
      > div:nth-of-type(2) {
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #eee;
        padding: 6px 12px;
        cursor: pointer;
        margin-right: 24px;
      }

      a {
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #eee;
        padding: 6px 12px;
        cursor: pointer;
        color: #000;
        text-decoration: none;
      }
    }

    input {
      padding: 6px;
      width: 75%;
      outline: none;
    }

    textarea {
      padding: 6px;
      width: 90%;
      min-height: 100px;
      outline: none;
      resize: vertical;
    }
  }

  > div:nth-of-type(2) {
    margin: 12px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;

    /* List Image */
    > div:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;

      > div {
        margin: 6px;
        padding: 6px;
        border: 1px solid #ccc;
        border-radius: 4px;
        height: fit-content;

        > div {
          display: flex;
          justify-content: center;
          padding: 6px;
          margin-top: 6px;
          border-radius: 4px;
          background-color: #bf1a2f;
          cursor: pointer;
        }
      }

      img {
        width: 240px;
        height: auto;
      }
    }

    input {
      padding: 6px;
    }
  }
`;
