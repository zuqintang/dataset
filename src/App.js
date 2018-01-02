import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DatasetPage from "./components/pages/DatasetPage";
import AddPage from "./components/pages/AddPage";
import DeletePage from "./components/pages/DeletePage";
import UploadPage from "./components/pages/UploadPage";
import DownloadPage from "./components/pages/DownloadPage";
import SelectPage from "./components/pages/SelectPage";

const App = () => (
  <div style={{ margin: "0 12px" }}>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/dataset" exact component={DatasetPage} />
    <Route path="/add" exact component={AddPage} />
    <Route path="/delete" exact component={DeletePage} />
    <Route path="/upload" exact component={UploadPage} />
    <Route path="/download" exact component={DownloadPage} />
    <Route path="/select" exact component={SelectPage} />
  </div>
);

export default App;
