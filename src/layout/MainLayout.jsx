import React from "react";
import { Outlet } from "react-router-dom";
import classes from "../scss/style.module.scss";
import Header from "./header/Header";

const MainLayout = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
