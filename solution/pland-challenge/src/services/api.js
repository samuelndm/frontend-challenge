import axios from "axios";
import { getToken, updateToken } from "./auth";

const params = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: getToken() },
};

const api = axios.create(params);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status =
      error.response && error.response.status ? error.response.status : error;
    let isTokenUpdated = false;
    switch (status) {
      case 401:
        isTokenUpdated = await updateToken();
        isTokenUpdated && document.location.reload(false);
        break;
      case 403:
        isTokenUpdated = await updateToken();
        isTokenUpdated && document.location.reload(false);
        break;
      case 405:
        console.error("Method Not Allowed");
        break;
      case 406:
        console.error("Not Acceptable");
        break;
      case 422:
        console.error("Unprocessable Entity");
        break;
      default:
        console.error(`Error: ${status}`);
        break;
    }
  }
);

export default api;
