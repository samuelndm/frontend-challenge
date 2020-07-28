import React from "react";
import { Container } from "../styledPage";
import Navbar from "../../components/Navbar";
import PlaceCreate from "../../components/PlaceCreate";

const Create = () => {
  return (
    <>
      <Navbar />
      <Container>
        <PlaceCreate />
      </Container>
    </>
  );
};

export default Create;
