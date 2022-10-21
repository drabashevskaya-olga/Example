import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserCtx } from "../../Ctx/User";
import PurchaseLayout from "./purchase";
import SignUp from "../auth/sign-up";
import Head from "../../components/Head";
import Loader from "../../components/loader";

export default function Purchase() {
  const { user } = useContext(UserCtx);
  const { subId } = useParams();

  if (user.loading) {
    return (
      <div className="page-50 flex">
        <Loader color="primary" size="50px" />
      </div>
    );
  }
  if (user.type !== "guest") {
    return (
      <>
        <Head slug={"/subscription/{id}"} />
        <PurchaseLayout planId={subId} />
      </>
    );
  }
  return <SignUp returnUrl={window.location.href} />;
}
