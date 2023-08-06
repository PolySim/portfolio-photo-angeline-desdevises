import styled from "styled-components";

export const SocialLinkStyle = styled.div<{ $footer: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: ${(props) => (props.$footer ? "30px 0" : "40px 0 110px")};

  svg {
    transition: transform 0.2s;
    margin-right: 30px;
  }

  svg:hover {
    fill: #7cc4c5;
    transform: rotate(-20deg) scale(1.2);
  }

  p {
    height: 100%;
    font-size: 100%;
  }
`;
