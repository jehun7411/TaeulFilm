import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {
  Business,
  Main,
  Introduce,
  Product,
  Faq,
  FaqEditPage,
  FaqPreviewPage,
} from "./components/pages";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/Faqeditpage" component={FaqEditPage} />
        <Route exact path="/introduce" component={Introduce} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/FaqPreviewPage" component={FaqPreviewPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
