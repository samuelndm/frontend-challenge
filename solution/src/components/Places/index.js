import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import Place from "../Place";

const Places = ({ places }) => {
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    setPlacesList(places || []);
  }, [places]);

  return (
    <Container>
      {placesList.length
        ? placesList.map((place) => (
            <Place place={place} key={`place-${place.id}`} />
          ))
        : null}
    </Container>
  );
};

export default Places;
