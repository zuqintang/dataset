import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DatasetPage from "./components/pages/DatasetPage";

const App = () => (
  <div style={{ margin: "0 12px" }}>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/dataset" exact component={DatasetPage} />
  </div>
);

export default App;
