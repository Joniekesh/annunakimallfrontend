import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";
import Links from "../links/Links";
import Filterbar from "../filterbar/Filterbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Filterbar />
      <Links />
    </div>
  );
};

export default Header;
