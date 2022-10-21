import React from "react";
import { Div } from "../../../../parts/general";
import { Input } from "../../../../parts/form";
import { H2 } from "../../../../parts/txt";
import styles from "./style.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import If from "../../../../components/renderIf";

export default function CsSearch({ setFilter }) {
  return (
    <div className={styles.Container}>
      <H2>Syllabus</H2>

      <If cond={typeof setFilter === "function"}>
        <Div className={styles.Input}>
          <Div className={styles.Icon}>
            <RiSearch2Line />
          </Div>
          <Input
            type="search"
            no-decoration
            placeholder="Search"
            onChange={(e) => setFilter(e.target.value)}
          />
        </Div>
      </If>
    </div>
  );
}
