import styled from "styled-components";

export const Container = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h1`
  max-width: 100%;
  margin: 5px 0;
  color: #9c1de7;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const State = styled.h5`
  margin: 5px 0;
  color: black;
`;

export const City = styled.h5`
  margin: 5px 0;
  color: black;
`;
