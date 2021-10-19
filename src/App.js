import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
  Business,
  Main,
  Faq,
  Introduce,
  Product,
  Skpi,
  Pvdfpi,
  Petpi,
  Thinpi,
  Siliconpi,
  Adhesivepi,
} from "./components/pages";

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
        <Route exact path="/detail" component={Skpi} />
        {/* <Route exact path="/petpi" component={Petpi} />
        <Route exact path="/thinpi" component={Thinpi} />
        <Route exact path="/pvdfpi" component={Pvdfpi} />
        <Route exact path="/siliconpi" component={Siliconpi} />
        <Route exact path="/adhesivepi" component={Adhesivepi} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
