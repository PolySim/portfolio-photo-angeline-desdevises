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
  > div:nth-of-type(2n + 1) {
    width: max-content;
    margin-left: 25px;
  }

  > div:nth-of-type(1) {
    margin-left: 0;
  }

  > div:nth-of-type(2n) {
    opacity: 0.15;
    font-size: 40%;
    margin-left: 25px;
  }

  > div:nth-of-type(3) {
    background: url(https://bucket1.format-assets.com/theme_versions/8549292/assets/images/arrow-down.svg)
      right 64% no-repeat;
    padding-right: 30px;
  }
`;
