import React, { useState } from "react";
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
  Detail,
} from "./components/pages";
function App() {
  const [currentColor, setCurrentColor] = useState([
    "343a40",
    "868e96",
    "dee2e6",
    "000000",
  ]);
  return (
    <div>
      <Header color={currentColor} setColor={setCurrentColor} />
      <Switch>
        <Route exact path="/" render={() => <Main theme={currentColor} />} />
        <Route
          exact
          path="/business"
          render={() => <Business theme={currentColor} />}
        />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/Faqeditpage" component={FaqEditPage} />
        <Route
          exact
          path="/introduce"
          render={() => <Introduce theme={currentColor} />}
        />
        <Route exact path="/product" component={Product} />} />
        <Route exact path="/FaqPreviewPage" component={FaqPreviewPage} />
        <Route
          exact
          path="/detail"
          render={() => <Detail theme={currentColor} />}
        />
      </Switch>
      <Footer theme={currentColor} />
    </div>
  );
}

export default App;
