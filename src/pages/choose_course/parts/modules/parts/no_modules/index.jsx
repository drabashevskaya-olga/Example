import React from "react";
import { H2, P } from "../../../../../../parts/txt";
import { Div } from "../../../../../../parts/general";
import noSubjects from "../../../../../../assets/noSubjects/noSubjects.svg";
import { UserCtx } from "../../../../../../Ctx/User";
import If from "../../../../../../components/renderIf";

export default function ChsNoModules() {
  const { useDevice } = React.useContext(UserCtx);
  const device = useDevice();

  return (
    <Div className="py-2">
      <If cond={device === "tablet" || device === "mobile"}>
        <Div className="flex-col text-center">
          <H2>No subjects selected</H2>
          <P>
            Please select a subject from the list or search <br /> for your
            modules and textbooks
          </P>
        </Div>
      </If>
      <If cond={device !== "tablet" && device !== "mobile"}>
        <img src={noSubjects} alt="noSubjects" />
      </If>
    </Div>
  );
}
