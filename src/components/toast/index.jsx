import React, { useEffect, useState, useRef } from "react";
import styles from "./style.module.scss";
import { Div } from "../../parts/general";

export default function Toast(props) {
  const [show, setShow] = useState(props.destroy > 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);

      if (props.onBlur) {
        props.onBlur(0);
      }
    }, props.destroy * 1000);

    return () => {
      setShow(true);
      clearTimeout(timer);
    };
  }, [props.children, props.destroy]);

  return (
    <Div
      {...props}
      className={`${styles.Container} ${props.className || ""}`}
      style={{
        "--width": props.width || "150px",
      }}
      aria-expanded={String(show)}
    >
      {props.children}
    </Div>
  );
}
