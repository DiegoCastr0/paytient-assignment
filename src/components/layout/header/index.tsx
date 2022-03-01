import React from "react";
import { RedditTIL } from "assets/icons";
import styles from "./Header.module.css";
import HamburgerMenuButton from "components/layout/hamburgerMenuButton";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <RedditTIL width="40" height="40" />
      <h1>Today I Learned (TIL)</h1>
      <HamburgerMenuButton />
    </header>
  );
};

export default Header;
