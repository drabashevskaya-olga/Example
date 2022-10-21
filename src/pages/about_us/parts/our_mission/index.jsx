import React from "react";
import { H2, P } from "../../../../parts/txt";
import { Div } from "../../../../parts/general";
import styles from "./style.module.scss";

export default function AboutUsOurMission() {
  return (
    <Div className={`text-center page py-5 ${styles.Container} flex-col`}>
      <H2>Our mission</H2>
      <P>
        To accelerate learning and unlock the potential in every STEM student by
        improving their understanding of challenging materials with easy-to-use,
        customised tutorials and study guides.
      </P>
    </Div>
  );
}
