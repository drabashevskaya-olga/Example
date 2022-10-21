import React from "react";
import styles from "./style.module.scss";
import { Gray } from "../../../../parts/txt";

export default function AuthOr() {
  return (
    <Gray className={styles.OR} block>
      OR
    </Gray>
  );
}
