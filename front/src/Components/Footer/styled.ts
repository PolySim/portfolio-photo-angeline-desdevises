import styled from "styled-components";
import { colors } from "@/constCSS.ts";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 12px;
  color: ${colors.gray};

  > p:nth-of-type(2) {
    margin: 8px 0 24px;
  }

  a {
    color: ${colors.gray};
  }
`;
