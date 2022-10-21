import React, { useState, useContext } from "react";
import { UserCtx } from "../../../../Ctx/User";
import * as Form from "../../../../parts/form";
import * as Btn from "../../../../parts/button";
import * as Txt from "../../../../parts/txt";
import BillingPopup from "../billing_popup";
import If from "../../../../components/renderIf";
import Loader from "../../../../components/loader";

export default function Billing() {
  const [show, setShow] = useState(false);
  const { user } = useContext(UserCtx);

  const getEndDate = (time) => {
    const date = new Date();
    date.setDate(date.getDate() + Math.floor(time || 0));
    return date.toISOString().split("T")[0].split("-").reverse().join("/");
  };

  return (
    <>
      <BillingPopup show={show} onHide={() => setShow(false)} />
      <Form.Form>
        <Txt.H2>Billing</Txt.H2>
        <Txt.Gray>Your plan</Txt.Gray>
        <br />
        <Txt.Span>
          <If cond={user.loading}>
            <Loader color="primary" />
          </If>
          <If cond={user.isSubscription}>
            Your plan will expire at {getEndDate(user.subscriptionEnd)}.
          </If>
          <If cond={!user.loading && !user.isSubscription && !user.isTrial}>
            You have no active plan
          </If>
          <If cond={user.isTrial}>
            You are on your free trial. this will end at{" "}
            {getEndDate(user.trialEnd)}
          </If>
        </Txt.Span>
        <br />
        <br />
        <Btn.Thick variant="success" block to="/pricing#cards">
          Change
        </Btn.Thick>
        <If cond={user.isSubscription}>
          <Txt.A onClick={() => setShow(true)} disabled className="fs-sm">
            Unsubscribe
          </Txt.A>
        </If>
      </Form.Form>
    </>
  );
}
