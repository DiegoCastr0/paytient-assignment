import React from "react";
import { RedditTIL } from "../../../assets/icons";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <RedditTIL width="40" height="40" />
      <h1>Today I Learned (TIL)</h1>
    </header>
  );
};

export default Header;
