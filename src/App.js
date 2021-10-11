import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import { Business, Main, Faq, Introduce, Product } from "./components/pages";

function App() {
  //init branch
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/introduce" component={Introduce} />
        <Route exact path="/product" component={Product} />
      </Switch>
      {/*테스트..*/}
    </div>
  );
}

export default App;
