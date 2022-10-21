import React, { useState } from "react";
import Popup from "../../../components/popup";
import { H2, P } from "../../../parts/txt";
import { Input } from "../../../parts/form";
import { Thick } from "../../../parts/button";

/**
 * @show -> will set weather the modal is shown.
 * @onHide -> a function that will be rendered when the user clicks on X
 **/

export default function ResetPassword(props) {
  return (
    <Popup {...props} centered>
      <div className="flex-col gap-2 p-2">
        <H2 className="h1">Reset Password</H2>
        <P className="text-center w-75">
          In order to create a new password, please enter your email and click
          submit.
        </P>
        <Input placeholder="Type your e-mail here" />
        <Thick block>Submit</Thick>
      </div>
    </Popup>
  );
}
