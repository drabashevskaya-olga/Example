import React from "react";
import Moment from "moment";
import { useState } from "react";
import * as Btn from "../../../../parts/button";
import { Div } from "../../../../parts/general";
import styles from "./style.module.scss";
import { VscDebugContinue } from "react-icons/vsc";
import { BiBook } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { Thick } from "../../../../parts/button";
import { Span, P } from "../../../../parts/txt";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { FiTriangle } from "react-icons/fi";
import { write } from "../../../../API/useful_functions";
import { IoCalendarOutline } from "react-icons/io5";
import If from "../../../../components/renderIf";
import Popup from "../../../../components/popup";

export default function CsAd(props) {
  const [displayRemove, setDisplayRemove] = useState(false);
  const [moduleToDel, setModuleToDel] = useState(false);

  return (
    <>
      <Popup show={moduleToDel} onHide={() => setModuleToDel(false)} centered>
        <Div>
          <P className="fw-bold fs-m">
            Are you sure you want to delete the module?
          </P>

          <Div className="flex justify-content-start gap-2">
            <Btn.Button
              variant="danger"
              className="w-50"
              onClick={() => props.delCourse()}
            >
              Delete
            </Btn.Button>
            <Btn.Custom
              className="text-dark fw-medium"
              onClick={() => setModuleToDel(false)}
            >
              Cancel
            </Btn.Custom>
          </Div>
        </Div>
      </Popup>

      <div className={styles.Container}>
        <ul>
          <li>
            <IoIosStats />{" "}
            <Span>
              {write(props.percentCompletedCourse, {
                default: "Loading...",
                max: 1,
                maxAfter: ".",
                pop: "% completed",
              })}
            </Span>
          </li>
          <li>
            <BiBook />
            <Span>
              {write(props.chapterLeft, {
                default: "Loading...",
                pop: " chapters left",
              })}
            </Span>
          </li>
          <li>
            <VscDebugContinue />
            <Span>
              {write(props.timeLeft, {
                default: "Loading...",
                pop: " left",
              })}
            </Span>
          </li>
          <li>
            <IoCalendarOutline />
            <Span>
              Last viewed:{" "}
              {write(
                Moment(props.lastCourseView?.split("T")[0]).format(
                  "MMMM Do, YYYY"
                )
              )}
            </Span>
          </li>
        </ul>
        <div className={styles.bottom}>
          <Thick to={props.videoLink}>
            <FiTriangle /> Continue
          </Thick>
          <div
            onClick={() => setDisplayRemove(!displayRemove)}
            className={styles.Menu}
          >
            <BsThreeDotsVertical />
          </div>
          <If cond={displayRemove}>
            <div className={styles.tooltip}>
              <button onClick={() => setModuleToDel(true)}>
                <GrFormClose /> remove course
              </button>
            </div>
          </If>
        </div>
      </div>
    </>
  );
}
