import React from "react";
import { Container } from "./styled";
import NoPicture from "../../../assets/images/no-picture.jpg";

import Picture from "./Picture";
import Info from "./Info";
import Options from "./Options";

const Place = ({ place, hideOptions }) => {
  return (
    <Container>
      <Picture picture={place.picture || NoPicture} />
      <Info name={place.name || "nome"} state={place.state} city={place.city} />
      {!hideOptions && <Options place={place} />}
    </Container>
  );
};

export default Place;
