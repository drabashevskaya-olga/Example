import React from "react";

import { UserCtx } from "../../../../../../Ctx/User";
import styles from "./style.module.scss";
import { Div } from "../../../../../../parts/general";
import * as Txt from "../../../../../../parts/txt";
import { Custom } from "../../../../../../parts/button";
import { IoMdSchool } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { write } from "../../../../../../API/useful_functions";
import If from "../../../../../../components/renderIf";

/**
 * @prop {string} title
 * @prop {string} description
 * @returns {JSX.Element}
 */

export default function ChsCard(props) {
  const { user } = React.useContext(UserCtx);

  return (
    <Div className={`${styles.module} rounded border`}>
      <Div className={styles.module__content}>
        <Div className={styles.module__img}>
          <Div className="bg-white border rounded">
            <IoMdSchool />
            <Txt.B>
              {write(props.name, {
                max: 2,
                case: "upper",
              })}
            </Txt.B>
          </Div>
        </Div>
        <Div className={styles.module__info}>
          <Div className={styles.module__info__headline}>
            <Txt.H4>
              {write(props.name, {
                max: 50,
                ellipsis: true,
              })}
            </Txt.H4>
            <If cond={user.loading || user.type === "guest"}>
              <Custom no-decoration to={props.syllabusLink}>
                + Select
              </Custom>
            </If>
            <If
              cond={
                !props.userHasCourse && user.type !== "guest" && !user.loading
              }
            >
              <Custom onClick={() => props.addModule(props.id, props.name)}>
                + Add
              </Custom>
            </If>
            <If
              cond={
                props.userHasCourse && user.type !== "guest" && !user.loading
              }
            >
              <Custom
                className={styles.added}
                onClick={() => props.delCourse({ courseId: props.id })}
              >
                <BsCheck /> Added
              </Custom>
            </If>
          </Div>
          <Txt.Gray className="fs-sm">{props.author}</Txt.Gray>
        </Div>
      </Div>
      <Txt.A
        className="fw-bold fs-sm"
        onClick={() => props.viewSyllabus(props.syllabusLink)}
      >
        View Syllabus <MdKeyboardArrowRight />
      </Txt.A>
    </Div>
  );
}
