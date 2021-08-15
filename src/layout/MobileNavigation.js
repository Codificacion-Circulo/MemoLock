import NavLinks from "./NavLinks";
import classes from "./Header.module.css";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <AiOutlineMenuFold
      className={classes.hamburger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <AiOutlineMenuUnfold
      className={classes.hamburger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);
  return (<div className={classes.MobileNavigation}>
  {open ? closeIcon : hamburgerIcon}
  {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
  </div>);
}

export default MobileNavigation;
