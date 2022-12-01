import React from "react";

import classes from "./aboutItem.module.scss";

function AboutItem(props) {
  const { img, title, meaning } = props;

  return (
    <div className={classes.aboutItem}>
      <img src={img} alt="" />
      <div className={classes.aboutItem__info}>
        <p>{title}</p>
        <p>{meaning}</p>
      </div>
    </div>
  );
}

export default AboutItem;
