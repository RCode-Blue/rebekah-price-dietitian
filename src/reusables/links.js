import React from "react";
import { Link } from "gatsby";

import "../styles/main.scss";
import "../styles/navbar.scss";

const navLinks = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "services",
    url: "/services/",
  },
  {
    id: 4,
    text: "work with me",
    url: "/wwme/",
  },
  {
    id: 5,
    text: "make an appointment",
    url: "/appointment/",
  },
  {
    id: 6,
    text: "contact",
    url: "/contact/",
  },
];

const linkList = navLinks.map((navLink) => {
  return (
    <li key={navLink.id} className="nav">
      <Link to={navLink.url} className="nav__link">
        {navLink.text}
      </Link>
    </li>
  );
});

export default () => {
  return <ul>{linkList}</ul>;
};
