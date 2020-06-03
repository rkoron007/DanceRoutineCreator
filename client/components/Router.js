import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import SessionForm from "./session/sessionForm";
import { AuthRoute } from "../util/routeUtil";
import Greeting from "./header/greeting";
export const Router = () => (
  <main>
    <Greeting />
    <Switch>
      <AuthRoute path="/signin" component={SessionForm} />
      <AuthRoute path="/signup" component={SessionForm} />
    </Switch>
  </main>
);
// <Redirect to="/" />;
