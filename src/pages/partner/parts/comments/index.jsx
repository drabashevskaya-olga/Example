import React from "react";
import styles from "./style.module.scss";
import { Div } from "../../../../parts/general";

export default function PartnerComments() {
  return (
    <>
      <Div className="d-flex flex-column flex-lg-row flex-lg-column">
        <Div className={`mx-3 mx-xl-0 my-5 my-xl-0 ${styles.Comment}`}>
          <Div className={styles.LeftText}>
            "I’m very impressed with the customised STEM videos and resources
            created by Proprep, for a fraction of the price for an online tutor"
          </Div>
          <Div className={styles.Author}>Kareena</Div>
          <Div className={styles.University}>
            Queen Mary University of London
          </Div>
        </Div>
        <Div className={`mx-3 mx-xl-0 my-3 my-lg-5 ${styles.Comment}`}>
          <Div className={styles.RightText}>
            "I loved using Proprep to improve my grades in Maths and Chemistry,
            and I'd recommend it for every STEM student who wants to learn in
            their own time."
          </Div>
          <Div className={`text-end ${styles.Author}`}>Amarni</Div>
          <Div className={`text-end ${styles.University}`}>
            University College London
          </Div>
        </Div>
      </Div>
    </>
  );
}
