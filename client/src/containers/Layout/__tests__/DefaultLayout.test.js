import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter, Route } from "react-router-dom";
import Layout from "../Layout";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Route path="/" name="Home" component={Layout} />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
