import React, { useState, useEffect } from "react";
import { Container } from "../styledPage";
import Navbar from "../../components/Navbar";
import Places from "../../components/Places";
import { fetchPlaces } from "../../services/places";

const List = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const { data } = await fetchPlaces();
        setPlaces(data.places || []);
      } catch (err) {
        console.error(err);
      }
    };

    loadPlaces();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Places places={places} />
      </Container>
    </>
  );
};

export default List;
