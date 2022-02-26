import React from "react";
import styles from "./LeftBar.module.css";
import { RedditLogo } from "../../../assets/icons";

const LeftBar: React.FC = () => {
  return (
    <div className={styles.leftBar}>
      <RedditLogo width="160" height="69"/>
    </div>
  );
};

export default LeftBar;
