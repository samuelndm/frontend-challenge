import React from "react";
import { NavbarContainer } from "./styled";

import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink title="Criar" />
      <NavbarLink title="Listar" />
      <NavbarLink title="Editar" />
      <NavbarLink title="Deletar" />
    </NavbarContainer>
  );
};

export default Navbar;
