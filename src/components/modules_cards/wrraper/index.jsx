import React from "react";
import styles from "./style.module.scss";

export default function ModulesWrraper(props) {
  return <div className={styles.Container}>{props.children}</div>;
}
