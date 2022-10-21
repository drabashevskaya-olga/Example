import React from "react";
import styles from "./style.module.scss";
import { Div } from "../../parts/general";

/**
 * @param {string} color - default is currentColor
 * @param {string} size - default is 30px
 * @returns
 */

export default function Loader(props) {
  return (
    <Div
      {...props}
      className={`${styles.Loader} ${props.className || ""}`}
      data-color={props.color}
      style={{
        ...props.style,
        "--color": props.color || "currentColor",
        "--size": props.size || "30px",
      }}
    >
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
      <Div></Div>
    </Div>
  );
}
