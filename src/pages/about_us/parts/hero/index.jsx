import React from "react";
import { XXL } from "../../../../parts/txt";
import styles from "./style.module.scss";

export default function AboutUsHero() {
  return (
    <div className={`page-100 flex ${styles.Container}`}>
      <XXL className="text-center">
        Making students'
        <br />
        lives easier
      </XXL>
    </div>
  );
}
