import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Slides from "./components/Slides";

export default () =>
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/slides" component={Slides} />
  </Switch>;
