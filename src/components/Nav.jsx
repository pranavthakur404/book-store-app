import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../component_css/Nav.module.css";
import Container from "./Container";

const Nav = () => {
  return (
    <Container>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
