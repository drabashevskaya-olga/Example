import React, { useEffect, useState } from "react";
import { UserCtx } from "../../Ctx/User";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  APIdelCourse,
  APIgetCourse,
  APIgetRelatedModules,
  APIaddCourse,
  APIIsCustomized,
} from "../../API/all/dashboard";
import { write } from "../../API/useful_functions";
import Head from "../../components/Head";
import If from "../../components/renderIf";
import * as Btn from "../../parts/button";
import * as Txt from "../../parts/txt";
import { Div } from "../../parts/general";
import FqCmp from "../faq/FqCmp";
import RecommCards from "../home/parts/recomm/cards";
import CsAccordion from "./parts/accordion";
import CsAd from "./parts/ad";
import CsGuestAd from "./parts/guest_ad";
import CpHeadline from "./parts/headline";
import CsLecturers from "./parts/lecturers";
import CsSearch from "./parts/search";
import styles from "./style.module.scss";
import Loader from "../../components/loader";
import CsRelated from "./parts/related";
import CsAddCourseAd from "./parts/addCourse_ad";
import CsSuccessPopup from "./parts/success_popup";
import Toast from "../../components/toast";
import CsSearchUni from "./parts/searchUni";
import CsAbout from "./parts/about";

export default function CoursePage() {
  const { user } = React.useContext(UserCtx);
  const { academicInstitution, program, course } = useParams();
  const LINK = `/${academicInstitution}/${program}/${course}`;

  const [relatedModules, setRelatedModules] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [courseData, setCourseData] = useState({});

  const [canLoadMore, setCanLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const [filter, setFilter] = useState("");
  const [offset, setOffset] = useState(0);
  const LIMIT = 12;

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showToast, setShowToast] = useState(0);

  const readChapters = useMutation(
    () =>
      APIgetCourse({
        link: LINK,
        name: filter,
        offset,
        limit: LIMIT,
      }),
    {
      onMutate: () => {
        setIsFetching(true);
      },
      onSuccess: (data) => {
        setCanLoadMore(chapters.length + LIMIT < data.chapterLeft);

        readRelatedModules.mutate(data.courseId);

        if (offset === 0 || filter) {
          // means we're onMount
          setChapters(data.chaptersReady || []);

          setCourseData({
            academicLink: data.academicLink,
            academicName: data.academicName,
            percentCompletedCourse: data.percentCompletedCourse,
            lastCourseView: data.lastCourseView,
            timeLeft: data.timeLeft,
            chapterLeft: data.chapterLeft,
            videoLink: data.videoLink,
            courseId: data.courseId,
            courseName: data.courseName,
            userHasCourse: data.isUserCourse,
            courseDuration: data.courseDuration,
            courseId: data.courseId,
          });
        } else {
          // the loadMore btn was clicked
          setChapters((chapters) => chapters.concat(data.chaptersReady || []));
        }
      },
      onSettled: () => {
        setIsLoading(false);
        setIsFetching(false);
      },
    }
  );

  const readRelatedModules = useMutation(APIgetRelatedModules, {
    onSuccess: setRelatedModules,
  });

  const delCourse = useMutation((courseId) => APIdelCourse({ courseId }), {
    onSuccess: readChapters.mutate,
  });

  const addCourse = useMutation((courseId) => APIaddCourse(courseId), {
    onSuccess: () => {
      setShowSuccessPopup(true);
      setShowToast(2);
      readChapters.mutate();
    },
  });

  const handleAddCourse = () => {
    if (courseData.courseId) {
      addCourse.mutate(courseData.courseId);
    }
  };

  const isCustomized = useQuery(["isCustomized", LINK], () =>
    APIIsCustomized(LINK)
  );

  useEffect(() => {
    readChapters.mutate();
  }, [offset, filter]);

  useEffect(() => {
    setChapters([]);
    setCourseData({});
    setOffset(0);
    setFilter("");
    setIsLoading(true);
    setRelatedModules([]);

    // if nothing changed
    if (offset === 0 && filter.length === 0) {
      readChapters.mutate();
    }
  }, [academicInstitution, program, course]);

  if (isLoading) {
    return (
      <div className="page-50 flex">
        <Loader color="primary" size="50px" />
      </div>
    );
  }
  return (
    <>
      <Head
        slug={"/university/{uni}"}
        uni={write(courseData.courseName, { default: "Loading..." })}
      />

      <If cond={user.type === "user"}>
        <CsSuccessPopup
          show={showSuccessPopup}
          onHide={() => setShowSuccessPopup(false)}
        />
      </If>

      <Toast
        width="280px"
        destroy={showToast}
        onBlur={() => setShowToast(0)}
        className={styles.Toast}
      >
        <Txt.H3>Modules Added</Txt.H3>
      </Toast>

      <CpHeadline
        name={write(courseData.courseName, { default: "Couldn't Load" })}
        id={write(courseData.courseId, { default: 0 })}
        isCustomized={isCustomized.data}
        course={course}
        academicName={courseData.academicName}
        academicLink={courseData.academicLink}
      />
      <Div className={styles.Container}>
        <Div className={styles.Search} id="syllabus">
          <CsSearch setFilter={setFilter} />
        </Div>
        <Div className={styles.Ad}>
          <If cond={user.type === "guest"}>
            <CsGuestAd />
          </If>
          <If cond={user.type !== "guest" && !courseData.userHasCourse}>
            <CsAddCourseAd {...courseData} addCourse={handleAddCourse} />
          </If>
          <If cond={user.type !== "guest" && courseData.userHasCourse}>
            <CsAd
              {...courseData}
              delCourse={() => delCourse.mutate(courseData.courseId)}
            />
          </If>
        </Div>
        <Div className={styles.Course}>
          <If cond={!chapters.length && !isLoading}>
            <Div className="py-5 flex">No Chapters</Div>
          </If>
          <If cond={!isLoading && chapters.length}>
            <CsAccordion
              chapters={chapters}
              userHasCourse={courseData.userHasCourse}
            />
          </If>
          <If
            cond={
              canLoadMore && courseData.userHasCourse && !isLoading && !filter
            }
          >
            <br />
            <Btn.Outlined
              loading={isFetching}
              block
              onClick={() => setOffset((offset) => offset + LIMIT)}
            >
              Load More <MdKeyboardArrowDown />
            </Btn.Outlined>
          </If>
        </Div>
        <Div className={styles.SearchUni} id="search_uni">
          <CsSearchUni />
        </Div>
        <Div className={styles.About} id="about">
          <CsAbout />
        </Div>
        <Div className={styles.Lecturers} id="lecturers">
          <If cond={readChapters.data?.coursesLecturer}>
            <CsLecturers data={readChapters.data?.coursesLecturer} />
          </If>
        </Div>
        <Div className={styles.Recom} id="reviews">
          <hr />
          <Txt.H2 className="mt-3">Featured review</Txt.H2>
          <RecommCards small={true} />
        </Div>
      </Div>
      <If cond={relatedModules.length}>
        <Div id="related">
          <CsRelated modules={relatedModules} />
        </Div>
      </If>
      <Div id="faq">
        <FqCmp />
      </Div>
    </>
  );
}
