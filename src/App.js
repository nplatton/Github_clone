import React from "react";
import { Switch, Route } from "react-router-dom";

// import { Header } from "./layout";
import { Home, About } from "./pages";

export const App = () => {
  return (
    <>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};