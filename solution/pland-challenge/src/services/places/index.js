import api from "../api";

export const fetchPlaces = (params = {}) => {
  return api.get("/places", {
    params: {
      ...params,
    },
  });
};
