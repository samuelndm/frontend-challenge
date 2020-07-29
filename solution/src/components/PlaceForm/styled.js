import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  max-width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 0 0 30px 0;
  font-size: 36px;
  text-align: center;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Input = styled.input`
  margin: 5px 0 15px 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9c1de7;
  color: white;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #f3558e;
  }
`;
