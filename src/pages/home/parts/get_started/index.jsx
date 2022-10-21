import React from "react";
import styles from "./style.module.scss";
import { H2, P, Span, B } from "../../../../parts/txt";

export default function GetStarted() {
  return (
    <div className={`page text-center text-light ${styles.Container}`}>
      <H2 className="text-light">Ready to get started?</H2>
      <P>
        You choose your university or major textbook, we build you a customised
        learning resources
      </P>
      <div className={styles.Steps}>
        <div className={styles.Numbers}>
          <div>
            <B>1</B>
          </div>
          <div>
            <B>2</B>
          </div>
          <div>
            <B>3</B>
          </div>
        </div>
        <div className={styles.Text}>
          <Span>Select your course</Span>
          <Span>Sign up</Span>
          <Span>Study smarted, not harder</Span>
        </div>
      </div>
    </div>
  );
}
