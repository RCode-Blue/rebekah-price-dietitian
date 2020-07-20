import React from "react";
import "../styles/main.scss";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return <>{children}</>;
};

export default Layout;
