import React from "react";
import { Container, Name, State, City } from "./styled";

const Info = ({ name, city, state }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <City>Cidade: {city}</City>
      <State>Estado: {state}</State>
    </Container>
  );
};

export default Info;
