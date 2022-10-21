import React from "react";
import styles from "../ad/style.module.scss";
import { VscDebugContinue } from "react-icons/vsc";
import { BiBook } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { Thick } from "../../../../parts/button";
import { Span } from "../../../../parts/txt";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { FiTriangle } from "react-icons/fi";
import { write } from "../../../../API/useful_functions";
import { MdAdd } from "react-icons/md";

export default function CsAddCourseAd(props) {
  return (
    <div className={styles.Container}>
      <ul>
        <li>
          <BiBook />
          <Span>
            {write(props.chapterLeft, {
              default: "Loading...",
              pop: " chapters",
            })}
          </Span>
        </li>
        <li>
          <VscDebugContinue />
          <Span>
            {write(props.courseDuration, {
              default: "Loading...",
              pop: " Video hours",
            })}
          </Span>
        </li>
      </ul>
      <div className={styles.bottom}>
        <Thick onClick={props.addCourse}>
          <MdAdd size="25px" /> Add to my modules
        </Thick>
      </div>
    </div>
  );
}
