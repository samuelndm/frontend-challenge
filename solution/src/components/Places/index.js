import React, { useEffect, useState } from "react";
import { PlacesContainer } from "./styled";
import { fetchPlaces } from "../../services/places";
import Place from "./Place";

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await fetchPlaces();
        console.log("data", data);
        setPlaces(data.places || []);
      } catch (e) {
        console.error(e);
      }
    };
    loadData();
  }, []);

  return (
    <PlacesContainer>
      {places.length &&
        places.map((place) => (
          <Place place={place} key={`place-${place.id}`} />
        ))}
    </PlacesContainer>
  );
};

export default Places;
