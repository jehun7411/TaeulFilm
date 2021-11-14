import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import { firestore } from "./util/api/fbInstance";
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
  useEffect(() => {
    firestore.collection("faq").onSnapshot((snapshot) => {
      const postArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postArray);
    });
  }, []);
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
        <Route exact path="/FaqPreviewPage" component={FaqPreviewPage} />
        <Route exact path="/detail" component={Detail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
