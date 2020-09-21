import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import { Home, Login, Cart, Mountain, Commuter, Road, Kids } from "./pages";

const Layout = () => {
  const routeNav = [
    {
      path: "/",
      render: Home,
    },
    {
      path: "/mountain",
      render: Mountain,
    },
    {
      path: "/commuter",
      render: Commuter,
    },
    {
      path: "/road",
      render: Road,
    },
    {
      path: "/kids",
      render: Kids,
    },
    {
      path: "/login",
      render: Login,
    },
    {
      path: "/cart",
      render: Cart,
    },
  ];
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Switch key={location.pathname}>
        {routeNav.map((r) => (
          <Route exact path={r.path} key={r.path}>
            <r.render />
          </Route>
        ))}
      </Switch>
    </AnimatePresence>
  );
};

export default Layout;
