import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import { getToken, updateToken } from "./services/auth";
import List from "./pages/List";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Search from "./pages/Search";

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
          <GuardedRoute exact path="/" component={List} />
          <GuardedRoute exact path="/create" component={Create} />
          <GuardedRoute exact path="/edit/:slug" component={Edit} />
          <GuardedRoute exact path="/search/:slug" component={Search} />
        </Switch>
      </GuardProvider>
    </Router>
  );
};

export default Routes;
