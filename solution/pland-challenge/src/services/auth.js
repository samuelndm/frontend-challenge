import Cookie from "js-cookie";

export const getToken = () => {
  return Cookie.get(process.env.REACT_APP_TOKEN);
};

export const updateToken = async () => {
  try {
    const response = await fetch(`https://pland-api.herokuapp.com/auth`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${process.env.REACT_APP_USERNAME}`,
        password: `${process.env.REACT_APP_PASSWORD}`,
      }),
    });

    const data = await response.json();
    Cookie.set(process.env.REACT_APP_TOKEN, `JWT ${data.access_token}` || "");
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
