import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "@/constCSS.ts";

export const ConnexionStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
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
      background-color: #eeeeee;
    }

    input {
      outline: none;
      margin: 24px 0;
      padding: 4px;
    }
  }
`;

export const AdminMenuStyle = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
`;

export const AdminOptionTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  box-sizing: border-box;
  width: 100%;
  max-width: 700px;
  margin: 24px auto 0;
  padding: 0 24px;
`;

export const AdminOptionTableHead = styled.div`
  height: fit-content;
  text-align: center;
`;

export const AdminOptionTableCell = styled.div`
  height: fit-content;
  text-align: start;
`;

export const AdminOptionLink = styled(Link)`
  color: ${colors.lightBleu};
  border: 1px solid ${colors.lightBleu};
  border-radius: 8px;
  text-decoration: none;
  padding: 6px 12px;
  transition: all 0.15s;

  &:hover {
    background-color: ${colors.lightBleu};
    color: white;
  }
`;

export const EditStyle = styled.main`
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  margin-top: 24px;
`;

export const AdminForm = styled.form`
  width: 45%;
  height: fit-content;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 12px;

  > p {
    margin: 24px 0 6px;
  }

  > input {
    padding: 6px;
    width: 80%;
    outline: none;
  }

  > textarea {
    padding: 6px;
    resize: vertical;
    width: 90%;
    outline: none;
    min-height: 100px;
    height: max-content;
    overflow: auto;
  }

  > div input {
    cursor: pointer;
    font-size: 16px;
    margin-top: 24px;
    margin-right: 24px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #eee;
    padding: 6px 12px;
  }
`;

export const AdminImagesStyle = styled.div`
  width: 45%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 12px;

  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    //flex-wrap: wrap;
  }

  > div:nth-of-type(2) {
    margin-top: 24px;

    > p {
      margin-bottom: 6px;
    }
  }
`;

export const AdminImage = styled.div`
  width: 240px;
  margin: 6px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;

  > img {
    width: 100%;
  }

  > div {
    display: flex;
    justify-content: center;
    width: fit-content;
    padding: 6px;
    margin: 6px auto 0;
    border-radius: 4px;
    background-color: #bf1a2f;
    cursor: pointer;
  }
`;

export const Description = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 6px;

  input[type="text"] {
    padding: 3px 6px;
    outline: none;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
  }

  input[type="submit"] {
    padding: 3px 6px;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
  }
`;

export const BackMenu = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  margin-left: 48px;
  margin-bottom: 48px;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #eee;
  padding: 6px 12px;
`;
