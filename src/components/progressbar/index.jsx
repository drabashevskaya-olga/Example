import React from "react";
import styles from "./style.module.scss";

/**
 *
 * @param {string} value 55%
 * @param {string} width width
 */

const ProgressBar = ({ value, width }) => (
  <div className={styles.bar} style={{ "--progress": value, width }}></div>
);

export default ProgressBar;
