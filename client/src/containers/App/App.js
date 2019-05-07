import React from "react";

import { DatePicker } from "@progress/kendo-dateinputs-react-wrapper";
import { Button } from "@progress/kendo-buttons-react-wrapper";
import SignInButton from "../SignInButton/SignInButton";
import "@progress/kendo-ui";
import "@progress/kendo-theme-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>Application works...</h1>
      <SignInButton />
    </div>
  );
}

export default App;
