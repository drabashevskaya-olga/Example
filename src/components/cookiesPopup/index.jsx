import React from "react";
import styles from "./style.module.scss";
import { Div } from "../../parts/general";
import { Span, A } from "../../parts/txt";
import { Button } from "../../parts/button";

/**
 * @param onAccept - function
 */
export default function CookiesConsentPopup({ onAccept }) {
  return (
    <Div className={styles.Container}>
      <Span>
        Proprep uses cookies to give you the best experience possible. Please
        accept this or{" "}
        <A to="/cookies-policy" decoration>
          learn more.
        </A>
      </Span>
      <Button className="px-5" onClick={onAccept}>
        Accept
      </Button>
    </Div>
  );
}
