import React from "react";
import { UserCtx } from "../../../../Ctx/User";
import { H2, P, A } from "../../../../parts/txt";
import { Button } from "../../../../parts/button";
import styles from "./style.module.scss";
import If from "../../../../components/renderIf";

export default function BiteSized() {
  const { user } = React.useContext(UserCtx);
  return (
    <div className={styles.Container}>
      <H2 className="text-center text-light">
        Bite-sized video tutorials that match your syllabus
      </H2>
      <P className="text-center text-light">
        Start learning now and get full access to all our customized STEM
        content
      </P>
      <If cond={user.type === "guest" || user.loading}>
        <Button glow to="/sign-up">
          Get started
        </Button>
      </If>
    </div>
  );
}
