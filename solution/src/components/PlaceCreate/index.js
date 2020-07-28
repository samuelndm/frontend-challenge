import React from "react";
import { Container } from "./styled";
import { createPlaces } from "../../services/places";

import PlaceForm from "../PlaceForm";

const PlaceCreate = () => {
  const handleSubmit = async (body = {}) => {
    try {
      await createPlaces(body);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <PlaceForm submit={handleSubmit} />
    </Container>
  );
};

export default PlaceCreate;
