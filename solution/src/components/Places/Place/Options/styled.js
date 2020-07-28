import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9c1de7;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  color: white;
`;

export const Option = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: #f3558e;
  }
`;
