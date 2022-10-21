import React from "react";
import { BsChat } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { VscDebugContinue } from "react-icons/vsc";
import { Thick } from "../../../../parts/button";
import { Span } from "../../../../parts/txt";
import styles from "./style.module.scss";

export default function CsGuestAd() {
  return (
    <div className={styles.Container}>
      <ul>
        <li>
          <VscDebugContinue />
          <Span>
            Unlimited access to thousands of
            <br />
            video tutorials and practice problems
          </Span>
        </li>
        <li>
          <BsChat />
          <Span>
            Three personal video answers from
            <br />
            our expert tutors
          </Span>
        </li>
        <li>
          <FiSettings />
          <Span>
            Customisable to your university,
            <br />
            with new modules created daily
          </Span>
        </li>
        <li>
          <HiOutlineShieldCheck />
          <Span>No commitment – cancel anytime</Span>
        </li>
      </ul>
      <div className={styles.bottom}>
        <Thick to="/sign-up" variant="success">
          Start your 14-day free trial
        </Thick>
      </div>
    </div>
  );
}
