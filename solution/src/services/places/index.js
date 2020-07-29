import api from "../api";

export const fetchPlaces = (params = {}) => {
  return api.get("/places", {
    params: {
      ...params,
    },
  });
};

export const fetchPlacesBySlug = (slug = "") => {
  return api.get(`/places/${slug}`);
};

export const fetchPlacesByName = (name = "") => {
  return api.get(`/places/search/${name}`);
};

export const createPlaces = (body = {}) => {
  return api.post("/places/new", {
    ...body,
  });
};

export const updatePlaces = (id, body = {}) => {
  return api.put("/places/edit", {
    id,
    fields: {
      ...body,
    },
  });
};
