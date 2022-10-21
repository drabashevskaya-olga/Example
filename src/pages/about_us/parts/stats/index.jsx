import React from "react";
import styles from "./style.module.scss";
import { Span } from "../../../../parts/txt";
import SvgLine from "../../../../assets/about_us/line.svg";
import If from "../../../../components/renderIf";

export default function BlueStats() {
  return (
    <div className={`page ${styles.Container}`}>
      <div className={styles.Row}>
        <div>
          <Span>3,5k+</Span>
          <Span>modules</Span>
        </div>
        <div>
          <Span>1.5M+</Span>
          <Span>Video views per month</Span>
        </div>
        <div>
          <Span>100k</Span>
          <Span>modules sold</Span>
        </div>
      </div>
      <div className={styles.Line}>
        <img src={SvgLine} alt="proprep svg line" />
      </div>
      <div className={styles.Row}>
        <div>
          <Span>50k+</Span>
          <Span>Videos</Span>
        </div>
        <div>
          <Span>1,2k+</Span>
          <Span>exercises with answers</Span>
        </div>
      </div>
    </div>
  );
}
