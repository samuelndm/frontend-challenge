import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styled";

const Update = ({ slug }) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`edit/${slug}`);
  };

  return <Container onClick={(e) => handleClick(e)}>Editar</Container>;
};

export default Update;
