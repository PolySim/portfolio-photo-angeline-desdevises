import styled from "styled-components";
import { colors } from "@/constCSS.ts";

export const ReorderReports = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  margin-bottom: 48px;
  width: 100vw;
  padding-top: 50px;
`;

export const Report = styled.div`
  padding: 12px;
  margin: 12px;
  background-color: ${colors.lightBleu};
  color: white;
  border-radius: 8px;
`;
