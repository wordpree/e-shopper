import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Login, Cart, Mountain, Commuter, Road, Kids } from "./pages";

const Layout = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/mountain">
        <Mountain />
      </Route>
      <Route path="/commuter">
        <Commuter />
      </Route>
      <Route path="/road">
        <Road />
      </Route>
      <Route path="/kids">
        <Kids />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Layout;
