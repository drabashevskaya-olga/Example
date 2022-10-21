import React from "react";
import Modal from "react-bootstrap/Modal";
import If from "../renderIf";
import { GrClose } from "react-icons/gr";
import { renderProps } from "../../parts/functions";
import styles from "./style.module.scss";
/**
 * @show -> will set weather the modal is shown.
 * @onHide -> a function that will be called when the user clicks on X
 * @title -> modal's title, default is an empty string.
 * @children -> Modal's body
 **/

const Popup = (props) => (
  <Modal {...renderProps(props)}>
    <If cond={props.title}>
      <Modal.Header className={styles.Headline} closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
    </If>
    <If cond={!props.title}>
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
    <Modal.Body>{props.children}</Modal.Body>
  </Modal>
);

export default Popup;
