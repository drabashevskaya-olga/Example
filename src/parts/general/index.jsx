import React from "react";
import { renderProps } from "../functions";
import styles from "./style.module.scss";

const Div = React.forwardRef((props, ref) => (
  <div
    {...renderProps(props)}
    ref={ref}
    className={`${styles.Div} ${props.className || ""}`}
  >
    {props.children}
  </div>
));

export { Div };
