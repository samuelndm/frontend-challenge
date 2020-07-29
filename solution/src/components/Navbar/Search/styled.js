import styled from "styled-components";

export const Container = styled.div`
  margin: 0 20px;
  padding: 5px 0;
  width: 100%;
  height: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  all: unset;
  padding: 0 5px;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Button = styled.button`
  all: unset;
  width: 55px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9c1de7;
  &:hover {
    cursor: pointer;
    background-color: #f3558e;
  }
`;
