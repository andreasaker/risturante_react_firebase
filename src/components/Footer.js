import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/admin">Admin</NavLink>
  </nav>
);

export default Footer;
