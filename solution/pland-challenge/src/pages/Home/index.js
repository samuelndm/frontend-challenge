import React from "react";
import { HomeContainer } from "./styled";

import Navbar from "../../components/Navbar";
import Places from "../../components/Places";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Places />
    </HomeContainer>
  );
};

export default Home;
