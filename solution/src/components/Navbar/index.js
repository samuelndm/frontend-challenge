import React from "react";
import { Container } from "./styled";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <Container>
      <Link to={"/"}>Listar</Link>
      <Link to={"/create"}>Criar</Link>
      <Search />
    </Container>
  );
};

export default Navbar;
