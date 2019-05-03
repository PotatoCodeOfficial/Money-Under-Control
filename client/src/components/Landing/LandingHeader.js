import React from "react";
import { PageHeader } from "antd";
import SignInButton from "../SignInButton/SignInButton";

class LandingHeader extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Money Under Control"
          extra={[<SignInButton key="signInButton" />]}
        />
      </div>
    );
  }
}
export default LandingHeader;
