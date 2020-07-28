import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #581b98;

  & a {
    width: 120px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      background-color: #f3558e;
      border-radius: 15px;
    }
  }
`;
