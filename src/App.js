import React, { useState } from "react";
import { Switch, Route } from "react-router";
import firebase, { firestore } from "./util/api/fbInstance";
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
  const [posts, setPosts] = useState([{ Title: "", Content: "" }]);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/business" component={Business} />
        <Route
          exact
          path="/faq"
          render={() => <Faq posts={posts} setPosts={setPosts} />}
        />
        <Route exact path="/Faqeditpage" component={FaqEditPage} />
        <Route exact path="/introduce" component={Introduce} />
        <Route exact path="/product" component={Product} />
        <Route
          exact
          path="/FaqPreviewPage"
          render={() => <FaqPreviewPage posts={posts} />}
        />
        <Route exact path="/detail" component={Detail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
