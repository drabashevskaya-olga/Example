import React from "react";
import { H2 } from "../../../../parts/txt";
import { Div } from "../../../../parts/general";
import styles from "./style.module.scss";
import {
  ModuleCard,
  ModulesWrraper,
} from "../../../../components/modules_cards";
import { write } from "../../../../API/useful_functions";

export default function CsRelated({ modules }) {
  return (
    <Div className={styles.Container}>
      <hr />
      <Div>
        <H2>Students like you also viewed</H2>
        <ModulesWrraper>
          {modules?.slice(0, 3).map((course, index) => (
            <ModuleCard
              key={index}
              color={"#4bb3fd"}
              title={write(course.name)}
              description={write(course.showChapterLabel, {
                max: 75,
                ellipsis: true,
              })}
              title_link={course.courseUrl}
              video_label={write(course.programName)}
              video_link={course.videoLink}
              progress={write(course.percentCompletedCourse, {
                max: 1,
                maxAfter: ".",
                pop: "%",
              })}
              thumbnail={write(course.imageLink, {
                shift: "https://proprep.com/",
              })}
              // onDelete={() => setModuleToDel(module.courseId)}
              // onView={() => navigate(module.courseLink)}
            />
          ))}
        </ModulesWrraper>
      </Div>
    </Div>
  );
}
