import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Business, Main, Faq, Introduce, Product } from "./components/pages";

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
