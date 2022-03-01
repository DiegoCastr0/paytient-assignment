import React from "react";
import styles from "./Tab.module.css";

interface Props {
  text: string;
  isActive: boolean;
  icon: React.ReactChild;
}

const Tab: React.FC<Props> = ({ text, isActive, icon }) => {
  return (
    <div className={`${styles.tabContainer} ${isActive ? styles.active : ""}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Tab;
