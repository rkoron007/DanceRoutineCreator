import React from "react";
import Greeting from "./greeting";

const Header = () => (
  <div className="header">
    <div>
      <span className="logo">Boogie</span>
      <h2 className="head-logo">Dance Creator</h2>
    </div>
    <Greeting />
  </div>
);

export default Header;
