import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import If from "../renderIf";
import { GrClose } from "react-icons/gr";
import { renderProps } from "../../parts/functions";
import styles from "./style.module.scss";

/**
 * @show -> will set weather the modal is shown.
 * @onHide -> a function that will be called when the user clicks on X
 * @title -> modal's title, default is an empty string.
 * @width -> modal's width, default is "fit-content".
 * @left -> modal's left position, default is "unset".
 * @right -> modal's right position, default is "unset".
 * @children -> Modal's body
 * @showloseButton -> show/hide close button
 **/

const SidePopup = (props) => (
  <Modal
    {...renderProps(props)}
    dialogClassName={`${styles.modalSideSize} ${props.className || ""} ${props.right ? styles.modalRight : ""}`}
    contentClassName={props.contentClassName || ""}
    style={{
      "--mobile-width": props.mobile_width,
      "--tablet-width": props.tablet_width,
      "--width": props.width || "fit-content",
      "--left": props.left || "unset",
      "--right": props.right || "unset",
      "--mobile-top": props.mobile_top || "unset",
      "--mobile-border-radius": props.mobile_border_radius || "0",
    }}
  >
    <If cond={props.title}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
        {props.extraTitle}
      </Modal.Header>
    </If>
      <If cond={!props.title}>
        <If cond={!props.showloseButton}>
          <div
            className="position-absolute end-0 py-3 px-4 pointer"
            style={{
              zIndex: "1061", // z-index of modal + 1
            }}
            onClick={props.onHide}
          >
            <GrClose />
          </div>
        </If>
      </If>
    <Modal.Body>{props.children}</Modal.Body>
  </Modal>
);

export default SidePopup;
