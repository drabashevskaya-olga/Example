import React from "react";
import { Div } from "../../../parts/general";
import { H3, Span, P, A } from "../../../parts/txt";
import styles from "./style.module.scss";
import {
  BsThreeDotsVertical,
  BsFillTriangleFill,
  BsBook,
} from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import If from "../../renderIf";

/**
 *
 * @param color {string}
 * @param title {string}
 * @param description {string}
 * @param title_link {string}
 * @param progress {string}
 * @param video_label {string}
 * @param video_link {string}
 * @param thumbnail {string}
 * @param resume_text {string}
 * @param icon {string}
 *
 * @param onView {function}
 * @param onDelete {function}
 */

export default function ModuleCard(props) {
  const tryToDelete = () => {
    if (typeof props.onDelete === "function") {
      props.onDelete();
    }
  };

  const tryView = () => {
    if (typeof props.onView === "function") {
      props.onView();
    }
  };

  return (
    <Div
      className={styles.Card}
      style={{
        "--color": props.color,
        "--progress": props.progress,
      }}
    >
      <Div className={styles.Card__top}>
        <Div className={styles.Card__top__headline}>
          <Div className={styles.top__text}>
            <A no-decoration to={props.title_link}>
              <H3>{props.title}</H3>
              <Span>{props.description}</Span>
            </A>
          </Div>
          <If cond={props.onDelete || props.onView}>
            <Div className={styles.dots_svg}>
              <BsThreeDotsVertical />
            </Div>
            <Div className={styles.dropdown}>
              <button onClick={tryView}>
                <BsBook /> View Syllabus
              </button>
              <button onClick={tryToDelete}>
                <VscClose /> Delete course
              </button>
            </Div>
          </If>
        </Div>
        <Div className={styles.Card_top_progress}>
          <Div className={styles.progress_bar}></Div>
          <Span>{props.progress} completed</Span>
        </Div>
        {props.icon || ""}
      </Div>
      <Div className={styles.Card__body}>
        <P>{props.video_label}</P>

        <Div className={styles.thumbnail}>
          <A no-decoration to={props.video_link}>
            <img
              alt="thumbnail"
              src={props.thumbnail}
              width="100%"
              className="border"
            />
            <Div className={styles.thumbnail__content}>
              <button>
                <BsFillTriangleFill />
              </button>
              <Span>{props.resume_text}</Span>
            </Div>
          </A>
        </Div>
      </Div>
    </Div>
  );
}
