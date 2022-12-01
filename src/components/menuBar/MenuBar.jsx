import React from "react";
import { Link } from "react-router-dom";

import classes from "./menuBar.module.scss";

function MenuBar() {
  return (
    <>
      <ul className={classes.menu}>
        <Link to="/">
          <li>FAQ</li>
        </Link>
        <Link to="/">
          <li>Оплата и доставка</li>
        </Link>
        <Link to="/">
          <li>Возврат</li>
        </Link>
        <Link to="/">
          <li>Исследования</li>
        </Link>
        <Link to="/">
          <li>Личный кабинет</li>
        </Link>
      </ul>
    </>
  );
}

export default MenuBar;
