import React from "react";
import styles from "./LeftBar.module.css";
import { RedditLogo, HomeIcon, PeopleIcon } from "assets/icons";
import { useAppSelector } from "store";
import { isMobileMenuOpen } from "store/modules/ui/selectors";
import Tab from "components/layout/tab";

const LeftBar: React.FC = () => {
  const mobileMenuOpen = useAppSelector(isMobileMenuOpen);

  return (
    <div
      className={`${styles.leftBar} ${
        mobileMenuOpen ? styles.mobileMenuOpen : ""
      }`}
    >
      <div className={styles.leftBarContent}>
        <RedditLogo width="160" height="69" />
        <div className={styles.tabs}>
          <Tab
            text="r/todayilearned"
            isActive={true}
            icon={<HomeIcon width="20px" height="20px" color="#9CA3AF" />}
          />
          <Tab
            text="Placeholder"
            isActive={false}
            icon={<PeopleIcon width="20px" height="20px" color="#9CA3AF" />}
          />
        </div>
        <div className={styles.userTab}>
          <img src={require("assets/images/avatar.png")} alt="Profile pic" />
          <div>
            <span>Tom Cook</span>
            <button>View profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
