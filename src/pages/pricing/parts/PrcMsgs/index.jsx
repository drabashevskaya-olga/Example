import React from "react";
import { Div } from "../../../../parts/general";
import * as Txt from "../../../../parts/txt";
import styles from "./style.module.scss";

export default function PrcMsgs() {
  return (
    <Div className={`${styles.Content} pt-5`}>
      <ul>
        <li>
          <Txt.Gray>
            Concept, and practice videos to guide you through your General
            Modules module
          </Txt.Gray>
        </li>
        <li>
          <Txt.Gray>
            Printable worksheets you can use to follow along with the videos and
            review content later
          </Txt.Gray>
        </li>
        <li>
          <Txt.Gray>
            Library of practice problems with video and text solutions to help
            you cement your understanding
          </Txt.Gray>
        </li>
      </ul>
      <Div className={styles.Messages}>
        <Div className={styles.Msg}>
          <Div className={styles.Msg__body}>
            <Txt.P>
              Library of practice problems with video and text solutions to help
              you cement your understanding
            </Txt.P>
          </Div>
          <Div className={styles.Msg__details}>
            <Txt.H3>Kareena</Txt.H3>
            <Txt.Gray>Queen Mary University of London</Txt.Gray>
          </Div>
        </Div>
        <Div className={styles.Msg}>
          <Div className={styles.Msg__body}>
            <Txt.P>
              "I loved using Proprep to improve my grades in Maths and
              Chemistry, and I'd recommend it for every STEM student who wants
              to learn in their own time."
            </Txt.P>
          </Div>
          <Div className={styles.Msg__details}>
            <Txt.H3>Amarni </Txt.H3>
            <Txt.Gray>University College London</Txt.Gray>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
