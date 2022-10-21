import React from "react";
import { BtnLink } from "../../../../parts/button";
import styles from "../../style.module.scss";
import { A } from "../../../../parts/txt";
import { Div } from "../../../../parts/general";

/**
 * @param {list} is the dropdown list, contains valid jsx element
 **/

export default function DropdownLink(props) {
  const renderLabel = (label) => {
    if (typeof label === "string") {
      return <BtnLink>{label}</BtnLink>;
    }
    return label;
  };

  return (
    <Div {...props} className={`${styles.dropdown} ${props.className || ""}`}>
      {renderLabel(props.children)}
      <div className={styles.dropdown__list}>
        {props.list.map((item, index) => (
          <A key={index} to={item.to} href={item.href}>
            {item.label}
          </A>
        ))}
      </div>
    </Div>
  );
}
