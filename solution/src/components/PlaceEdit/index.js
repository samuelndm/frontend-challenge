import React, { useEffect, useState } from "react";
import { fetchPlacesBySlug, updatePlaces } from "../../services/places";
import { Container } from "./styled";
import PlaceForm from "../PlaceForm";

const PlaceEdit = ({ slug }) => {
  const [place, setPlace] = useState({});
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await fetchPlacesBySlug(slug);
        setPlace(data.place || {});
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, [slug]);

  const handleSubmit = async (newPlace = {}) => {
    const body = {
      name: {
        current_value: place.name,
        new_value: newPlace.name,
      },
      slug: {
        current_value: place.slug,
        new_value: newPlace.slug,
      },
      city: {
        current_value: place.city,
        new_value: newPlace.city,
      },
      state: {
        current_value: place.state,
        new_value: newPlace.state,
      },
    };

    try {
      await updatePlaces(place.id, body);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <PlaceForm place={place} submit={handleSubmit} />
    </Container>
  );
};

export default PlaceEdit;
