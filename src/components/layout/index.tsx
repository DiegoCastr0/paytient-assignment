import React, { ReactNode } from "react";
import LeftBar from "./leftBar";
import styles from "./Layout.module.css";
import Header from "./header";

const Layout: React.FC<ReactNode> = ({ children }) => {
  return (
    <div className={styles.container}>
      <LeftBar />
      <div className={styles.mainContent}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
