import React from "react";

import NavLinks from "../reusables/links";

import "../../styles/main.scss";
import "../../styles/footer.scss";
import "../../styles/attribution.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__nav">
          <NavLinks />
        </div>
        <p className="footer__author">
          Copyright Ricky Liew. Used for Demonstration purposes only.
        </p>
      </div>
    </div>
  );
};

export default Footer;
