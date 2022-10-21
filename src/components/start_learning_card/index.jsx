import React from "react";
import { H2, A } from "../../parts/txt";
import styles from "./style.module.scss";

/**
 * @param color the main color of the card
 * @param children is the title of the card
 **/

export default function StartLearningCard(props) {
  const { color, svg, children, link, name } = props;
  const COLORS = ["#EC0B5E", "#DEA47E", "#5299D3", "#ECC30B"];
  return (
    <A to={link}>
      <div
        className={styles.Card}
        style={{
          "--color": color || COLORS[Math.floor(Math.random() * COLORS.length)],
        }}
      >
        {svg || ""}
        <H2>{name || children || "! Missing Name"}</H2>
      </div>
    </A>
  );
}
