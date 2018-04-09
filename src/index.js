import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Navigation from "./Navigation";

const App = () => (
  <div>
    <Header />
    <Navigation />
  </div>
);

render(<App />, document.getElementById("root"));
