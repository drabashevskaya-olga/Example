import React from "react";
import { UserCtx } from "../../../../Ctx/User";
import Img from "../../../../assets/WatchAnywhere/img.jpg";
import Img1 from "../../../../assets/WatchAnywhere/img1.jpg";
import { Button } from "../../../../parts/button";
import { H2, P } from "../../../../parts/txt";
import styles from "./style.module.scss";
import If from "../../../../components/renderIf";

export default function WatchAnywhere() {
  const { user } = React.useContext(UserCtx);
  return (
    <div className={`page bg-light  ${styles.Container}`}>
      <div className={styles.Imgs}>
        <img alt="proprep theme image" src={Img} loading="lazy" />
        <img alt="proprep theme image" src={Img1} loading="lazy" />
      </div>
      <div className={styles.Text}>
        <H2>Watch anywhere, anytime, on any device.</H2>
        <P>
          Studying with Proprep means you have the ultimate flexibility to
          choose your schedule, learning pace and where you study from. We’ve
          got everything you need to succeed, accessible 24/7
        </P>
        <If cond={user.type === "guest" || user.loading}>
          <Button to="/sign-up">Start Learning Now</Button>
        </If>
      </div>
    </div>
  );
}
