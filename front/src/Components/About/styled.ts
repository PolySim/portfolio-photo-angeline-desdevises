import styled from "styled-components";
import { colors } from "@/constCSS.ts";

export const AboutStyle = styled.main`
  display: flex;
  justify-content: space-evenly;
  margin-top: 24px;

  > div {
    position: sticky;
    top: 24px;
    width: 42.5%;
    height: max-content;

    > img {
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    > div {
      width: 85%;
      position: relative;
      margin-bottom: 24px;
    }
  }
`;

export const Description = styled.div`
  color: ${colors.gray};

  h1 {
    font-size: 57px;
    color: ${colors.black};
  }

  p {
    margin-top: 12px;
    line-height: 20.4px;
    font-size: 12px;
  }

  h4 {
    font-size: 20px;
    margin-top: 50px;
  }
`;
