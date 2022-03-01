import { OPEN_MOBILE_MENU, CLOSE_MOBILE_MENU } from "./types";

const openMobileMenu = () => ({
  type: OPEN_MOBILE_MENU,
});

const closeMobileMenu = () => ({
  type: CLOSE_MOBILE_MENU,
});

export { openMobileMenu, closeMobileMenu };
