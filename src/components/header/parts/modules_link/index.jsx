import React from "react";
import { LocaleCtx } from "../../../../Ctx/Locale";
import { BtnLink } from "../../../../parts/button";
import styles from "./style.module.scss";
import { Outlined } from "../../../../parts/button";
import ProgressBar from "../../../progressbar";
import * as Txt from "../../.././../parts/txt";

import If from "../../../../components/renderIf";
import { write } from "../../../../API/useful_functions";

import { useQuery } from "react-query";
import { APIgetMyModules } from "../../../../API/all/dashboard";

export default function ModulesLink() {
  const myModules = useQuery("modules", APIgetMyModules);
  const { locale } = React.useContext(LocaleCtx);

  return (
    <div className={styles.Container}>
      <BtnLink to="/mycourses" onMouseOver={myModules.refetch}>
        {locale.header.my_modules}
      </BtnLink>

      <div className={styles.dropdown}>
        <div className={styles.wrraper}>
          <ul>
            <If cond={!myModules.data?.coursesList?.length}>
              <div className="px-3 pt-3 flex">
                <Txt.Span className="fs-cmnt-l">
                  You don't have any modules yet
                </Txt.Span>
              </div>
            </If>
            <If cond={myModules.data?.coursesList?.length}>
              {myModules.data?.coursesList
                ? myModules.data?.coursesList.map((module, index) => (
                    <li key={index}>
                      <Txt.A to={write(module.courseLink)}>
                        <Txt.Span>
                          {write(module.courseName, {
                            max: 40,
                            ellipsis: true,
                          })}
                        </Txt.Span>
                        <Txt.P>{module.courseDuration}</Txt.P>
                        <ProgressBar
                          value={write(module.percentCompletedCourse, {
                            pop: "%",
                          })}
                        />
                      </Txt.A>
                    </li>
                  ))
                : ""}
            </If>
          </ul>
          <div className={styles.btn}>
            <Outlined to="/onboard">Add new course</Outlined>
          </div>
        </div>
      </div>
    </div>
  );
}
