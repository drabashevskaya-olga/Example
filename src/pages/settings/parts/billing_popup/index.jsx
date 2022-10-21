import React, { useState } from "react";
import Popup from "../../../../components/popup";
import styles from "./style.module.scss";
import * as Txt from "../../../../parts/txt";
import * as Btn from "../../../../parts/button";
import { Div } from "../../../../parts/general";
import { Form, Select } from "../../../../parts/form";
import { BsCheckLg } from "react-icons/bs";
import { renderProps } from "../../../../parts/functions";
import { useMutation } from "react-query";
import { APIunsubscribe } from "../../../../API/all/pricing";

/**
 * @show -> will set weather the modal is shown.
 * @onHide -> a function that will be called when the user clicks on X
 **/

const OPTIONS = [
  "Select a reason",
  "Finanicials",
  "Finisahed School",
  "Im smart",
];

export default function BillingPopup(props) {
  const [reason, setReason] = useState(OPTIONS[0]);

  const unsubscribe = useMutation(APIunsubscribe, {
    onSuccess: () => {
      window.location.reload();
    },
  });

  const submitUnsubscribe = () => {
    if (reason === OPTIONS[0]) return;
    unsubscribe.mutate();
  };

  return (
    <Popup {...renderProps(props)} className={styles.Container} centered>
      <div className={styles.Content}>
        <Txt.H2>Study smarter, not harder with Proprep</Txt.H2>
        <Txt.P>
          It's important to us that you take full advantage of your Proprep
          plan.
        </Txt.P>
        <Txt.B>Don’t forget you have access to</Txt.B>
        <Div className={styles.wehave}>
          <Div className={styles.wehave_card}>
            <Div className={styles.wehave_card_checkmark}>
              <BsCheckLg />
            </Div>
            <Txt.P>
              A custom-made module tailored especially to your modules
            </Txt.P>
          </Div>
          <Div className={styles.wehave_card}>
            <Div className={styles.wehave_card_checkmark}>
              <BsCheckLg />
            </Div>{" "}
            <Txt.P>
              A custom-made module tailored especially to your modules
            </Txt.P>
          </Div>
          <Div className={styles.wehave_card}>
            <Div className={styles.wehave_card_checkmark}>
              <BsCheckLg />
            </Div>{" "}
            <Txt.P>
              A custom-made module tailored especially to your modules
            </Txt.P>
          </Div>
          <Div className={styles.wehave_card}>
            <Div className={styles.wehave_card_checkmark}>
              <BsCheckLg />
            </Div>{" "}
            <Txt.P>
              A custom-made module tailored especially to your modules
            </Txt.P>
          </Div>
        </Div>
      </div>
      <div className={styles.Form}>
        <Txt.H2>Oh no! Are you sure you want to leave us?</Txt.H2>
        <Txt.P>
          Cancelling your plan means you'll miss out on lots of amazing features
          that have already helped 500,000+ students succeed in their STEM
          studies - and we want to be there for you too!
        </Txt.P>
        <Btn.Thick block onClick={props.onHide}>
          Stay with us
        </Btn.Thick>

        <Form block>
          <Txt.B>Still want to say goodbye? Let us know why*</Txt.B>
          <Select onChange={(e) => setReason(e.target.value)}>
            {OPTIONS.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </Select>
          <Btn.Thick
            variant="danger"
            disable={String(Boolean(reason === OPTIONS[0]))}
            block
            onClick={submitUnsubscribe}
          >
            Cancel subscription
          </Btn.Thick>
        </Form>
      </div>
    </Popup>
  );
}
