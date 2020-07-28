import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Label, Input, Button } from "./styled";
import { pascalToSnakeCase } from "../../utils/utils";
import Place from "../Places/Place";

const PlaceForm = ({ place, submit = () => {} }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [placeBody, setPlaceBody] = useState({
    name: name,
    slug: slug,
    city: city,
    state: state,
  });

  useEffect(() => {
    if (place) {
      setName(place.name || "");
      setSlug(place.slug || "");
      setCity(place.city || "");
      setState(place.state || "");
    }
  }, [place]);

  useEffect(() => {
    setPlaceBody({
      name: name || "",
      slug: slug || "",
      city: city || "",
      state: state || "",
    });
  }, [name, slug, state, city]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setSlug((prevSlug) => pascalToSnakeCase(prevSlug));
      const body = { ...placeBody, slug: pascalToSnakeCase(slug) };

      await submit(body);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Place place={placeBody} hideOptions={true} />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Label htmlFor={"name"}>Nome</Label>
        <Input
          name="name"
          required
          value={name}
          placeholder="Nome"
          onChange={(e) => {
            setName(e.target.value);
            setSlug(pascalToSnakeCase(e.target.value));
          }}
        />
        <Label htmlFor={"slug"}>Slug</Label>
        <Input
          name="slug"
          value={slug}
          placeholder="Slug"
          onChange={(e) => setSlug(e.target.value)}
        />
        <Label htmlFor={"city"}>Cidade</Label>
        <Input
          name="city"
          required
          value={city}
          placeholder="Cidade"
          onChange={(e) => setCity(e.target.value)}
        />
        <Label htmlFor={"state"}>Estado</Label>
        <Input
          name="state"
          required
          value={state}
          placeholder="Estado"
          onChange={(e) => setState(e.target.value)}
        />

        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default PlaceForm;