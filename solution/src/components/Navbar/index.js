import React from "react";
import { Container } from "./styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Link to={"/"}>Listar</Link>
      <Link to={"/create"}>Criar</Link>
    </Container>
  );
};

export default Navbar;
