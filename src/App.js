import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Assignment1 from "./components/assignment-1";
import Assignment2 from "./components/assignment-2";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/assignment-1" exact component={Assignment1} />
        <Route path="/assignment-2" exact component={Assignment2} />
        <Route component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
