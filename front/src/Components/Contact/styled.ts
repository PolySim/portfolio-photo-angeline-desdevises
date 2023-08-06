import styled from "styled-components";
import { colors } from "@/constCSS.ts";

export const ContactStyle = styled.main`
  width: 100vw;

  > div:nth-of-type(1) {
    width: 85%;
    margin: 0 auto;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Available = styled.div`
  width: 85%;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 34px;
    margin-top: 30px;
  }

  > p {
    width: 75%;
    margin: 30px auto 0;
    line-height: 150%;
    font-size: 12px;
    text-align: center;
    color: ${colors.gray};
  }

  @media screen and (max-width: 770px) {
    > p {
      text-align: start;
      width: 85%;
    }
  }
`;

export const Email = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  margin: 20px auto 0;
  color: ${colors.gray};

  > div:nth-of-type(1) {
    width: 35%;
    margin-right: 5%;

    h5 {
      margin-top: 24px;
      font-size: 15px;
    }

    p {
      margin-top: 6px;
      word-break: break-word;
    }
  }

  @media screen and (max-width: 770px) {
    flex-direction: column;
    align-items: center;

    > div:nth-of-type(1) {
      width: 85%;
      margin-right: 0;
    }
  }
`;

export const ContactForm = styled.form`
  width: 60%;
  height: max-content;

  input {
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    border: 1px solid ${colors.gray};
    color: ${colors.gray};
    padding: 18px;
    font-size: 14px;
    outline: none;
  }

  input:nth-of-type(2) {
    border-top: none;
  }

  textarea {
    box-sizing: border-box;
    border: 1px solid ${colors.gray};
    border-top: none;
    width: 100%;
    padding: 18px;
    outline: none;
    overflow-wrap: break-word;
    resize: vertical;
    height: 130px;
  }

  input:nth-of-type(3) {
    cursor: pointer;
    margin-top: 24px;
    height: 50px;
    background-color: transparent;
    transition: all 0.4s;

    &:hover {
      color: #000;
      background-color: ${colors.lightBleu};
    }
  }

  @media screen and (max-width: 770px) {
    margin-top: 24px;
    width: 85%;

    input:nth-of-type(3) {
      color: #000;
      background-color: ${colors.lightBleu};
      font-size: 22px;
      height: auto;
    }
  }
`;
