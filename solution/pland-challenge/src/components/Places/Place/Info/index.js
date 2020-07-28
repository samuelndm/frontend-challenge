import React from "react";
import { Container, Name, State, City } from "./styled";

const Info = ({ name, state, city }) => {
  return (
    <Container>
      <Name>Nome: {name}</Name>
      <State>Estado: {state}</State>
      <City>Cidade: {city}</City>
    </Container>
  );
};

export default Info;
