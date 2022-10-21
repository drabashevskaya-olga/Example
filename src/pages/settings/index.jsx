import React from "react";
import ContentHeadline from "../../components/contentHeadline";
import { Div } from "../../parts/general";
import * as Txt from "../../parts/txt";
import * as Btn from "../../parts/button";
import * as Form from "../../parts/form";

import styles from "./style.module.scss";
import ManageProfile from "./parts/profile";
import ChangePassword from "./parts/change_password";
import Billing from "./parts/billing";
import Head from "../../components/Head";

export default function Settings() {
  return (
    <>
      <Head slug={"/user/settings"} />
      <ContentHeadline>Settings</ContentHeadline>
      <Div className="page">
        <Div className={styles.Forms}>
          <ManageProfile />
          <ChangePassword />
          <Billing />
        </Div>
      </Div>
    </>
  );
}
