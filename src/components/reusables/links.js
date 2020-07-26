import React from "react";
import { Link } from "gatsby";

import "../../styles/main.scss";
import "../../styles/navbar.scss";

const navLinks = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about#about",
  },
  {
    id: 3,
    text: "services",
    url: "/services/",
  },
  {
    id: 4,
    text: "work with me",
    url: "/about#expect",
  },
  {
    id: 5,
    text: "make an appointment",
    url: "/services#locations",
  },
  {
    id: 6,
    text: "contact",
    url: "/services#locations",
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
