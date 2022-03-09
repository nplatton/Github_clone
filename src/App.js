import React from "react";
import { Switch, Route } from "react-router-dom";

// import { Header } from "./layout";
import { Home, NotFound } from "./pages";

<<<<<<< HEAD
 const App = () => {
=======
const App = () => {
>>>>>>> 17f752b663e776f8eaeb1f2b28fa7b7604492231
  return (
    <>
      {/* <Header /> */}
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

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 17f752b663e776f8eaeb1f2b28fa7b7604492231
