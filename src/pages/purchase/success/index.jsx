import React from "react";
import { Div } from "../../../parts/general";
import * as Txt from "../../../parts/txt";
import * as Btn from "../../../parts/button";
import Head from "../../../components/Head";

export default function PaymentSuccess() {
  return (
    <>
      <Head slug="/payment/success" />
      <Div className="page-50 bg-light py-5 flex-col text-center gap-2">
        <Txt.H2>Payment was successful!</Txt.H2>
        <Txt.P>
          Thank you for subscribing to Proprep.
          <br />
          Now you can study wherever you want, whenever you want.
        </Txt.P>
        <Btn.Button className="py-2 px-4" glow href="/mycourses">
          Get started now
        </Btn.Button>
      </Div>
    </>
  );
}
