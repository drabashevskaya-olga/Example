import React from "react";
import { H2, Span } from "../../../../parts/txt";
import { Div } from "../../../../parts/general";
import styles from "./style.module.scss";

import settingsIcon from "../../../../assets/pricing/settings-icon.svg";
import hatIcon from "../../../../assets/pricing/hat.svg";
import guideIcon from "../../../../assets/pricing/guide.svg";
import ideaIcon from "../../../../assets/pricing/idea.svg";

export default function WhatWeOffer() {
  return (
    <Div className="page py-5 flex-col gap-4">
      <H2>What we offer</H2>

      <Div className={styles.Cards}>
        <div>
          <img src={settingsIcon} alt="settings icon proprep" />
          <Span className="fw-m">
            courses customized to your
            <br />
            needs
          </Span>
        </div>
        <div>
          <img src={ideaIcon} alt="settings icon proprep" />
          <Span className="fw-m">Bite-sized video tutorials</Span>
        </div>
        <div>
          <img src={guideIcon} alt="settings icon proprep" />
          <Span className="fw-m">Study guides and practice questions</Span>
        </div>
        <div>
          <img src={hatIcon} alt="settings icon proprep" />
          <Span className="fw-m">
            Taught by top professors with at least 10 years teaching experience
          </Span>
        </div>
      </Div>
    </Div>
  );
}
