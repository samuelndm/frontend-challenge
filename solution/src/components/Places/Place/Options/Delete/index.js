import React from "react";
import { Container } from "./styled";

const Delete = ({ id }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    const deleteItem = window.confirm("Tem certeza que deseja deletar?");
    console.log("delete", deleteItem);
  };

  return <Container onClick={(e) => handleDelete(e)}>Deletar</Container>;
};

export default Delete;
