import React, { useState, useEffect } from "react";
import { UserCtx } from "../../Ctx/User";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { APIgetAcademyPage } from "../../API/all/general";
import { write } from "../../API/useful_functions";
import { APIaddCourse, APIdelCourse } from "../../API/all/dashboard";

import Head from "../../components/Head";
import If from "../../components/renderIf";
import SyllabusPopup from "../../components/syllabus_popup";

import * as Txt from "../../parts/txt";
import * as Btn from "../../parts/button";
import { Div } from "../../parts/general";

import styles from "./style.module.scss";
import ChsSearchbox from "./parts/searchbox";
import ChsSubjects from "./parts/subjects";
import ChsUploadSyllabus from "./parts/upload_syllabus";
import ChsModules from "./parts/modules";
import { deepCopy } from "../../parts/functions";

import Toast from "../../components/toast";
import ChsHeadline from "./parts/headline";
import Loader from "../../components/loader";

import writeDataLayer from "../../components/dataLayer";

export default function ChooseCourse() {
  const { user } = React.useContext(UserCtx);
  const { academicInstitution, program } = useParams();
  const [filter, setFilter] = useState("");
  const [modules, setModules] = useState([]);

  const [modulesAdded, setModulesAdded] = useState(0);
  const [toastTimer, setToastTimer] = useState(0);
  const [showSubjects, setShowSubjects] = useState([]);
  const [showSyllabus, setShowSyllabus] = useState(false);
  const [syllabusLink, setSyllabusLink] = useState("");

  const academy = useQuery(
    ["Get academy page", academicInstitution, program],
    () => APIgetAcademyPage({ link: `/${academicInstitution}/${program}` }),
    {
      retry: false,
      retryOnMount: false,
    }
  );

  const addCourse = useMutation(APIaddCourse, {
    onSuccess: (data) => {
      toggleModuleButton(data.request.responseURL.split("id=")[1]);
      setModulesAdded((prv) => prv + 1);
      setToastTimer(3);

      if (showSyllabus) {
        setShowSyllabus(false);
      }
    },
  });

  const delCourse = useMutation(APIdelCourse, {
    onSuccess: (data) => {
      toggleModuleButton(data.request.responseURL.split("courseId=")[1]);
      setModulesAdded((prv) => prv - 1);
    },
  });

  useEffect(() => {
    if (academy.data?.academicCourses) {
      setModules(academy.data.academicCourses);
    }
  }, [academy.data]);

  const toggleModuleButton = (id) =>
    setModules(
      deepCopy(modules).map((module) => {
        if (module.textBookCourses) {
          const chosenModule = module.textBookCourses.findIndex(
            (course) => course.id == id
          );

          if (chosenModule !== -1) {
            module.textBookCourses[chosenModule].userHasCourse =
              !module.textBookCourses[chosenModule].userHasCourse;
          }
        }

        if (module.baseCourses) {
          const chosenModule = module.baseCourses.findIndex(
            (course) => course.id == id
          );

          if (chosenModule !== -1) {
            module.baseCourses[chosenModule].userHasCourse =
              !module.baseCourses[chosenModule].userHasCourse;
          }
        }

        if (module.courses) {
          const chosenModule = module.courses.findIndex(
            (course) => course.id == id
          );

          if (chosenModule !== -1) {
            module.courses[chosenModule].userHasCourse =
              !module.courses[chosenModule].userHasCourse;
          }
        }

        return module;
      })
    );

  const filterModules = (modules, showSubjects, filter) =>
    deepCopy(modules)
      .map((module) => {
        if (module.textBookCourses) {
          module.textBookCourses = module.textBookCourses.filter((course) =>
            course.name.toLowerCase().includes(filter.toLowerCase())
          );
        }

        if (module.baseCourses) {
          module.baseCourses = module.baseCourses.filter((course) =>
            course.name.toLowerCase().includes(filter.toLowerCase())
          );
        }

        if (module.courses) {
          module.courses = module.courses.filter((course) =>
            course.name.toLowerCase().includes(filter.toLowerCase())
          );
        }

        return module;
      })
      .filter(
        (module) =>
          showSubjects.includes(module.name) &&
          (Object.keys(module.textBookCourses).length ||
            Object.keys(module.baseCourses).length ||
            Object.keys(module.courses).length)
      );

  const viewSyllabus = (link) => {
    setShowSyllabus(true);
    setSyllabusLink(link);
  };

  const addModule = (id, name) => {
    addCourse.mutate(id);

    writeDataLayer({
      event: "courseAdded",
      courseName: name,
      userId: user.userId,
    });
  };

  if (academy.isLoading) {
    return (
      <div className="page-50 fs-l flex">
        <Loader color="primary" size="50px" />
      </div>
    );
  }
  if (academy.isError) {
    return (
      <div className="page-50 fs-l flex">
        <Txt.H2>Unexpected error</Txt.H2>
      </div>
    );
  }
  return (
    <>
      <Head
        prefix={""}
        slug={"/{academicInstitution}/{program}"}
        academicInstitution={write(academy.data?.academic?.name)}
      />

      <SyllabusPopup
        show={!!showSyllabus}
        link={syllabusLink}
        onHide={() => setShowSyllabus(false)}
        addModule={addModule}
        isLoading={addCourse.isLoading}
      />

      <If cond={modulesAdded > 0}>
        <Toast
          width="280px"
          destroy={toastTimer}
          onBlur={setToastTimer}
          className={styles.Toast}
        >
          <Txt.H3>
            {modulesAdded > 1
              ? `${modulesAdded} Modules Added`
              : `${modulesAdded}
            Module Added`}
          </Txt.H3>
          <Btn.Button to="/mycourses">Continue to modules</Btn.Button>
        </Toast>
      </If>

      <ChsHeadline name={academy.data?.academic?.name} />

      <Div className={styles.Container}>
        <Div className={styles.Subjects}>
          <If cond={modules.length}>
            <ChsSubjects
              subjects={modules.map((item) => item.name)}
              setList={setShowSubjects}
              list={showSubjects}
            />
          </If>
        </Div>
        <Div className={styles.SearchBox}>
          <ChsSearchbox filter={filter} setFilter={setFilter} />
        </Div>
        <Div className={styles.Modules}>
          <If cond={modules.length}>
            <ChsModules
              courses={filterModules(modules, showSubjects, filter)}
              addModule={addModule}
              delCourse={delCourse.mutate}
              viewSyllabus={viewSyllabus}
            />
          </If>
        </Div>
        <Div className={styles.Syllabus}>
          <ChsUploadSyllabus />
        </Div>
      </Div>
    </>
  );
}
