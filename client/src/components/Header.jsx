import React from "react";
import styles from "../stylesheets/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1>Repo</h1>
      </div>
      <ul className={styles.menu}>
        <li className={styles.li}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link to="/signin">SignIn</Link>
        </li>
        <li className={styles.li}>
          <Link to="/about">About</Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Header;
