import React, { useState } from "react";
import styles from "./style.module.scss";
import Head from "../../components/Head";
import ContentHeadline from "../../components/contentHeadline";
import * as Txt from "../../parts/txt";
import * as Btn from "../../parts/button";
import DevAlert from "../../components/devAlert";
import JoinUs from "../home/parts/join_us";
import If from "../../components/renderIf";
import FqGeneral from "./FqGeneral";
import FqPricing from "./FqPricing";

export default function FAQ() {
  const [activeSection, setActiveSection] = useState("general");
  return (
    <>
      <Head slug={"/faq"} />
      <ContentHeadline>
        <Txt.H1>How can we help you?</Txt.H1>
        <Txt.P>
          Frequently Asked Questions - can’t find what you are looking for?{" "}
          <Txt.A to="/contact-us">Contact us</Txt.A>
        </Txt.P>
      </ContentHeadline>
      <div className="page">
        <div className={styles.SwitchBtns}>
          <If cond={activeSection === "general"}>
            <Btn.Button onClick={() => setActiveSection("general")}>
              GENERAL
            </Btn.Button>
            <Btn.Outlined onClick={() => setActiveSection("pricing")}>
              PRICING
            </Btn.Outlined>
          </If>
          <If cond={activeSection === "pricing"}>
            <Btn.Outlined onClick={() => setActiveSection("general")}>
              GENERAL
            </Btn.Outlined>
            <Btn.Button onClick={() => setActiveSection("pricing")}>
              PRICING
            </Btn.Button>
          </If>
        </div>
      </div>

      <If cond={activeSection === "general"}>
        <FqGeneral />
      </If>
      <If cond={activeSection === "pricing"}>
        <FqPricing />
      </If>

      <JoinUs />
    </>
  );
}
