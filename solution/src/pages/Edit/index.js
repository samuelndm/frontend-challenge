import React from "react";
import { Container } from "../styledPage";
import Navbar from "../../components/Navbar";
import PlaceEdit from "../../components/PlaceEdit";

const Edit = ({ match, ...props }) => {
  const slug = match.params.slug || "";
  return (
    <>
      <Navbar />
      <Container>
        <PlaceEdit slug={slug} />
      </Container>
    </>
  );
};

export default Edit;
