import React from "react";
import { Container, Image } from "./styled";

const Picture = ({ picture }) => {
  return (
    <Container>
      <Image src={picture} alt="profile picture" />
    </Container>
  );
};

export default Picture;
