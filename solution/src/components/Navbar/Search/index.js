import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { Container, Form, Input, Button } from "./styled";

const Search = () => {
  const history = useHistory();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("history", history);
    history.push(`/search/${name}`);
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="search"
          name="search"
          value={name}
          required
          placeholder="Digite um nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit">
          <SearchIcon style={{ color: "white" }} />
        </Button>
      </Form>
    </Container>
  );
};

export default Search;
