import React from "react";
import { Div } from "../../../../parts/general";
import { H2, H3, P } from "../../../../parts/txt";
import styles from "./style.module.scss";

export default function CsLecturers({ data }) {
  return (
    <Div className={styles.Container}>
      <hr />
      <H2>Lecturers</H2>
      <Div className={styles.lecturer}>
        <Div>
          <img
            alt="proprep Lecturers"
            src="https://www.proprep.com/Images/Lecturers/AmosB.jpg"
          />
          <H3>
            {data.firstName} {data.lastName}
          </H3>
        </Div>
        <P>{data.description}</P>
      </Div>
    </Div>
  );
}
