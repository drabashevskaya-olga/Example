import React from "react";
import { renderProps } from "../../parts/functions";
import { Div } from "../../parts/general";
import * as Txt from "../../parts/txt";
import If from "../renderIf";
import styles from "./style.module.scss";

export function CommentsWrraper(props) {
  return (
    <Div
      {...renderProps(props)}
      className={`${styles.Container} ${props.className || ""}`}
    >
      {props.children}
    </Div>
  );
}

/**
 * @param {string} avatar - url to avatar
 * @param {string} profileImg - two letters of the user
 * @param {string} name - name of user
 * @param {string} date - date of comment
 * @param {string} text - text of comment
 */
export function Comment(props) {
  const { avatar, profileImg, name, date, text } = props;
  return (
    <Div className={styles.comment}>
      <Div className={styles.comment__avatar}>
        <If cond={avatar}>
          <img src={avatar} alt="avatar" />
        </If>
        <If cond={profileImg && !avatar}>
          <Div>
            <Txt.Span>{profileImg}</Txt.Span>
          </Div>
        </If>
      </Div>
      <Div className={styles.comment__content}>
        <Div className={styles.comment__content__header}>
          <Txt.H4>{name}</Txt.H4>
          <Txt.Span>{date}</Txt.Span>
        </Div>
        <Txt.P className={styles.comment__content__p}>{text}</Txt.P>
      </Div>
    </Div>
  );
}
