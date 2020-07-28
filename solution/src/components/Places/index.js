import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import { fetchPlaces } from "../../services/places";
import Place from "./Place";

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await fetchPlaces();
        setPlaces(data.places || []);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  return (
    <Container>
      {places.length
        ? places.map((place) => (
            <Place place={place} key={`place-${place.id}`} />
          ))
        : null}
    </Container>
  );
};

export default Places;
