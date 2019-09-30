import React from "react";
import { Route } from "react-router-dom";

import Layout from "../containers/Layout/Layout";
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";
import { Checkout } from "../containers/Checkout/Checkout";

const App = () => {
  return (
    <div>
      <Layout>
        <Route exact path="/" component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
      </Layout>
    </div>
  );
};

export default App;
