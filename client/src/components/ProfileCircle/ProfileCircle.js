import React, { Component } from "react";
import {
  DropDownButton,
  DropDownButtonItem
} from "@progress/kendo-react-buttons";

export default class ProfileCircle extends Component {
  logOut = ev => {
    alert("Logging out");
  };

  render() {
    return (
      <DropDownButton
        text="User Settings"
        onItemClick={this.logOut}
        icon="user"
      >
        <DropDownButtonItem text="Log Out" />
      </DropDownButton>
    );
  }
}
