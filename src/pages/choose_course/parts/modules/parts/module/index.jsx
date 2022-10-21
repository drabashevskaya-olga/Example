import React, { useState } from "react";
import ChsCard from "../Card";
import { write } from "../../../../../../API/useful_functions";
import If from "../../../../../../components/renderIf";
import { genId } from "../../../../../../parts/functions";

import { Div } from "../../../../../../parts/general";
import { H3, Gray } from "../../../../../../parts/txt";
import Collapse from "react-bootstrap/Collapse";

import { IoIosArrowForward } from "react-icons/io";
import styles from "./style.module.scss";

export default function ChsModule(props) {
  const { name, addModule, delCourse, index } = props;
  const [firstCustomExpanded, setFirstCustomExpanded] = useState(true);
  const [customExpanded, setCustomExpanded] = useState(false);
  const [baseCoursesExpanded, setBaseCoursesExpanded] = useState(false);
  const [textbookCourses, setTextbookCourses] = useState(false);

  const baseCoursesID = genId("baseCoursesID");
  const customCoursesID = genId("customCoursesID");
  const textbookCoursesID = genId("textbookCoursesID");

  return (
    <Div>
      <H3 className="mt-2">{write(name)}</H3>
      <If cond={props.courses.length}>
        <Div
          aria-controls={customCoursesID}
          aria-expanded={String(customExpanded)}
          onClick={() => {
            setCustomExpanded((exp) => !exp);
            setFirstCustomExpanded((exp) => !exp);
          }}
          className={styles.ModuleHead}
        >
          <Gray className={styles.Gray}>
            Customised modules ({props.courses.length}) <IoIosArrowForward />
          </Gray>
        </Div>
        <Collapse in={index === 0 ? firstCustomExpanded : customExpanded}>
          <Div className={styles.Modules} id={customCoursesID}>
            {props.courses.map((course, index) => (
              <ChsCard
                key={index}
                {...course}
                delCourse={delCourse}
                addModule={addModule}
                viewSyllabus={props.viewSyllabus}
              />
            ))}
          </Div>
        </Collapse>
      </If>
      <If cond={props.baseCourses.length}>
        <Div
          aria-controls={baseCoursesID}
          aria-expanded={String(baseCoursesExpanded)}
          onClick={() => setBaseCoursesExpanded((exp) => !exp)}
          className={styles.ModuleHead}
        >
          <Gray className={styles.Gray}>
            General Modules ({props.baseCourses.length}) <IoIosArrowForward />
          </Gray>
        </Div>
        <Collapse in={baseCoursesExpanded}>
          <Div className={styles.Modules} id={baseCoursesID}>
            {props.baseCourses.map((course, index) => (
              <ChsCard
                key={index}
                {...course}
                addModule={addModule}
                delCourse={delCourse}
                viewSyllabus={props.viewSyllabus}
              />
            ))}
          </Div>
        </Collapse>
      </If>
      <If cond={props.textBookCourses.length}>
        <Div
          aria-controls={textbookCoursesID}
          aria-expanded={String(textbookCourses)}
          onClick={() => setTextbookCourses((exp) => !exp)}
          className={styles.ModuleHead}
        >
          <Gray className={styles.Gray}>
            Textbooks ({props.textBookCourses.length}) <IoIosArrowForward />
          </Gray>
        </Div>
        <Collapse in={textbookCourses}>
          <Div className={styles.Modules} id={textbookCoursesID}>
            {props.textBookCourses.map((course, index) => (
              <ChsCard
                key={index}
                {...course}
                addModule={addModule}
                delCourse={delCourse}
                viewSyllabus={props.viewSyllabus}
              />
            ))}
          </Div>
        </Collapse>
      </If>
    </Div>
  );
}
