import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";

import MenuBar from "../../components/menuBar/MenuBar";

import logo from "../../assets/logo/logo.svg";
import basket from "../../assets/icon/basket.svg";

function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.header__logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={classes.header__navigate_menu}>
            <MenuBar />
          </div>
          <div className={classes.header__phone}>
            <a href="tel:8 8 (800) 600-09-90"> 8 8 (800) 600-09-90 </a>
          </div>
          <div className={classes.header__basket}>
            <img src={basket} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
