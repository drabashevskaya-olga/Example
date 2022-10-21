import React, { useEffect, useState } from "react";
import { UserCtx } from "../../Ctx/User";
import SidePopup from "../sidePopup";
import CsSearch from "../../pages/course-page/parts/search";
import CsAccordion from "../../pages/course-page/parts/accordion";
import CsLecturers from "../../pages/course-page/parts/lecturers";
import RecommCards from "../../pages/home/parts/recomm/cards";
import * as Txt from "../../parts/txt";
import * as Btn from "../../parts/button";
import If from "../renderIf";
import { Div } from "../../parts/general";
import styles from "./style.module.scss";
import { useMutation, useQuery } from "react-query";
import { APIgetCourse } from "../../API/all/dashboard";
import { BsShieldCheck, BsPlusLg } from "react-icons/bs";
import colorMap from "../../components/color_map";
import generalCourses from "../../components/generalCourses";
import { GrClose } from "react-icons/gr";

export default function SyllabusPopup(props) {
  const { user } = React.useContext(UserCtx);
  const [filter, setFilter] = useState(null);

  const syllabus = useQuery(props.link, () =>
    APIgetCourse({
      link: props.link,
      name: filter || "",
      offset: 0,
      limit: 10,
    })
  );

  useEffect(() => {
    syllabus.refetch();
  }, [filter]);

  const getModuleColor = (id) => {
    if (generalCourses) {
      const category = generalCourses[id];

      if (category) {
        const colorMapItem = category["colorMapItem"];
        return colorMap[colorMapItem].color + "20";
      }
    }

    return "#4bb3fd20";
  };

  return (
    <SidePopup
      show={props.show}
      onHide={props.onHide}
      width="50%"
      showloseButton="false"
      right="0px"
      contentClassName="syllabusPopupContent"
      mobile_top="30%"
      mobile_width="100%"
      tablet_width="100%"
      mobile_border_radius="15px"
    >
      <Div className={styles.Container}>
        <Div
          className={styles.Head}
          style={{ "--color": getModuleColor(syllabus.data?.courseId) }}
        >
          <Div className={styles.HeadInner}>
            <Div
              className={`position-absolute end-0 py-3 px-4 pointer d-none d-lg-block ${styles.Close}`}
              style={{ zIndex: "1061" }}
              onClick={props.onHide}
            >
              <GrClose />
            </Div>
            <Div className={`d-block d-lg-none ${styles.GrayIcon}`}></Div>
            <Div className={styles.HeadContent}>
              <Txt.H1>{syllabus.data?.courseName}</Txt.H1>

              <If cond={user.type !== "guest" && !user.loading}>
                <Txt.B className="text-primary flex gap-2 justify-content-start">
                  <BsShieldCheck /> Customized for your school
                </Txt.B>
              </If>
              <If
                cond={
                  !syllabus.data?.isUserCourse &&
                  user.type !== "guest" &&
                  !user.loading
                }
              >
                <Btn.Button
                  block
                  className="my-3 fw-medium"
                  loading={props.isLoading}
                  onClick={() =>
                    props.addModule(
                      syllabus.data?.courseId,
                      syllabus.data?.courseName
                    )
                  }
                >
                  <BsPlusLg /> Add to my modules
                </Btn.Button>
              </If>

              <If cond={user.type === "guest" || user.loading}>
                <Btn.Thick
                  variant="success"
                  block
                  className="my-3 fw-medium"
                  to="/sign-up"
                >
                  Get started
                </Btn.Thick>
              </If>
            </Div>
          </Div>
        </Div>
        <br />
        <Div
          className={styles.Body}
          style={{ "--color": getModuleColor(syllabus.data?.courseId) }}
        >
          <Div className={styles.BB}></Div>
          <CsSearch setFilter={setFilter} />
          <Div className={styles.Course} id="syllabus">
            <If
              cond={
                !syllabus.data?.chaptersReady?.length && !syllabus.isLoading
              }
            >
              No Chapters
            </If>
            <If cond={syllabus.data?.chaptersReady?.length}>
              <CsAccordion
                chapters={syllabus.data?.chaptersReady}
                disableLinks={true}
              />
            </If>
          </Div>
          <If cond={syllabus.data?.coursesLecturer}>
            <CsLecturers data={syllabus.data?.coursesLecturer} />
          </If>
          <Div id="reviews">
            <RecommCards small={true} noScrollSnap={true} />
          </Div>
        </Div>
      </Div>
    </SidePopup>
  );
}
