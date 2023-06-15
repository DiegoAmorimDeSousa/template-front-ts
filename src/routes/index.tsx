import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyles from "../global/styles";

import Default from "../pages/DefaultPage";

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Default} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
