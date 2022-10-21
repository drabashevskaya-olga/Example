import React from "react";
import Popup from "../../../../components/popup";
import * as Txt from "../../../../parts/txt";
import { Thick } from "../../../../parts/button";
import { Div } from "../../../../parts/general";
import styles from "./style.module.scss";

export default function CsSuccessPopup(props) {
  return (
    <Popup {...props} centered>
      <Div className={styles.Container}>
        <Txt.H2>The module has been successfully added to your modules</Txt.H2>
        <Txt.P className="text-secondary">
          You are <Txt.B>currently limited</Txt.B> to viewing 1 minute previews.
          Upgrade your account to get full access.
        </Txt.P>
        <Txt.Span>
          <Txt.B>Subscription plan </Txt.B>
          features:
        </Txt.Span>
        <ul>
          <li>20 000+ video hours and exercises</li>
          <li>Downloadable resources</li>
          <li>Access all our learning content</li>
          <li>Created by world-class professors</li>
          <li>No commitment – cancel anytime</li>
        </ul>
        <Thick to="/pricing" variant="success" block className="py-2">
          Upgrade my account
        </Thick>
      </Div>
    </Popup>
  );
}
