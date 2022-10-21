import React from "react";
import styles from "./style.module.scss";

function BasicCard(props) {
  return (
    <div className={`${styles.BasicCard} ${props.className || ""}`}>
      {props.children}
    </div>
  );
}

function BasicCardWrraper(props) {
  return (
    <div className={`${styles.Wrraper} ${props.className || ""}`}>
      {props.children}
    </div>
  );
}

export { BasicCard, BasicCardWrraper };
