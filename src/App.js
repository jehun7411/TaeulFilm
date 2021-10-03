import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import Business from "./components/pages/Business";
import Main from "./components/pages/Main";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/business" component={Business} />
      </Switch>
    </div>
  );
}

export default App;
