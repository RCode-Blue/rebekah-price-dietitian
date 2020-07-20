import React from "react";

import NavLinks from "../reusables/links";

import "../styles/main.scss";
import "../styles/navbar.scss";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <NavLinks />
    </nav>
  );
};

export default NavBar;
