import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./layout";
import { Home, NotFound } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
