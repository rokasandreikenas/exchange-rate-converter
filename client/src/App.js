import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Currency from "./pages/Currency";
import "./App.scss";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Currency} exact />
      </Switch>
    </Router>
  );
};

export default App;
