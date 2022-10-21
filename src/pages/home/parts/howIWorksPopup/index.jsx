import React from "react";
import { Button } from "../../../../parts/button";
import Popup from "../../../../components/popup";
import styles from "./style.module.scss";

export default function HowItWorks(props) {
  return (
    <Popup {...props} title="See how it works" centered>
      <div className={styles.Container}>
        <video className="shd-4 rounded" width="100%" controls autoPlay>
          {/* // todo */}
          <source src="https://www.proprep.com/Content/Videos/HowItWorks.mp4"></source>
        </video>
        <Button onClick={() => props?.onHide()} className="px-5 py-2 fw-bold">
          Got it
        </Button>
      </div>
    </Popup>
  );
}
