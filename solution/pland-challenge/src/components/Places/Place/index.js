import React from "react";
import { Container } from "./styled";

import Info from "./Info";

const Place = ({ place }) => {
  return (
    <Container>
      <Info name={place.name} state={place.state} city={place.city} />
    </Container>
  );
};

export default Place;
