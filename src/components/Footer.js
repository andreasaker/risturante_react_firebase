import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
    <p>© Copyright 2020 Risturante all rights reserved </p>
  </div>
);

export default Footer;
