import React from "react";
import styles from "./HamburgerMenuButton.module.css";
import { useAppSelector, useAppDispatch } from "store";
import { openMobileMenu, closeMobileMenu } from "store/modules/ui/actions";
import { isMobileMenuOpen } from "store/modules/ui/selectors";

const HamburgerMenuButton: React.FC = () => {
  const mobileMenuOpen = useAppSelector(isMobileMenuOpen);
  const dispatch = useAppDispatch();

  const handleHamburgerMenuClick = (): void => {
    if (mobileMenuOpen) {
      dispatch(closeMobileMenu());
    } else {
      dispatch(openMobileMenu());
    }
  };

  return (
    <button
      className={`${styles.menuButton} ${
        mobileMenuOpen ? styles.mobileMenuOpen : ""
      }`}
      onClick={handleHamburgerMenuClick}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default HamburgerMenuButton;
