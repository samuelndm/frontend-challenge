import React, { useEffect, useState } from "react";
import { fetchPlacesByName } from "../../services/places";
import { Container } from "../styledPage";
import Navbar from "../../components/Navbar";
import Places from "../../components/Places";

const Search = ({ match }) => {
  const [keyword] = useState(match.params.slug || "");
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await fetchPlacesByName(keyword);
        setPlaces(data.places || []);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, [keyword]);

  return (
    <>
      <Navbar />
      <Container>
        <Places places={places} />
      </Container>
    </>
  );
};

export default Search;
