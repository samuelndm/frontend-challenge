import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import { getToken, updateToken } from "./services/auth";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

const Routes = () => {
  const requireLogin = (to, from, next) => {
    if (getToken()) {
      next();
    }
    updateToken();
    next.redirect("/");
  };

  return (
    <Router>
      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <GuardedRoute exact path="/" component={Home} />
          <GuardedRoute exact path="/create" component={Create} />
          <GuardedRoute exact path="/edit/:slug" component={Edit} />
        </Switch>
      </GuardProvider>
    </Router>
  );
};

export default Routes;
