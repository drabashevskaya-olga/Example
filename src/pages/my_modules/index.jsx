import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div } from "../../parts/general";
import { H1, Span, A, P } from "../../parts/txt";
import * as Btn from "../../parts/button";
import MdNoModules from "./parts/no_modules";
import Head from "../../components/Head";
import { ModuleCard, ModulesWrraper } from "../../components/modules_cards";
import If from "../../components/renderIf";
import { APIgetMyModules, APIdelCourse } from "../../API/all/dashboard";
import { useQuery, useMutation } from "react-query";
import { write } from "../../API/useful_functions";
import { UserCtx } from "../../Ctx/User";
import { LocaleCtx } from "../../Ctx/Locale";
import Loader from "../../components/loader";
import Popup from "../../components/popup";
import colorMap from "../../components/color_map";
import generalCourses from "../../components/generalCourses";

export default function MyModules() {
  const navigate = useNavigate();
  const { user } = useContext(UserCtx);
  const { locale } = useContext(LocaleCtx);

  const [moduleToDel, setModuleToDel] = useState(false);

  const { data, isLoading, refetch } = useQuery("my_modules", APIgetMyModules);

  const deleteCourse = useMutation((courseId) => APIdelCourse({ courseId }), {
    onSuccess: () => {
      refetch();
      setModuleToDel(false);
    },
  });

  const getModuleColor = (id) => {
    if (generalCourses) {
      const category = generalCourses[id];

      if (category) {
        const colorMapItem = category["colorMapItem"];
        return colorMap[colorMapItem].color;
      }
    }

    return "#4bb3fd";
  };

  const getModuleIcon = (id) => {
    if (generalCourses) {
      const category = generalCourses[id];

      if (category) {
        const colorMapItem = category["colorMapItem"];
        return colorMap[colorMapItem].icon;
      }
    }

    return colorMap["math"].icon;
  };

  return (
    <>
      <Head slug={"/mycourses"} />

      <Popup show={moduleToDel} onHide={() => setModuleToDel(false)} centered>
        <If cond={deleteCourse.isLoading}>
          <Div className="flex py-3">
            <Loader color="primary" size="35px" />
          </Div>
        </If>
        <If cond={!deleteCourse.isLoading}>
          <Div>
            <P className="fw-bold fs-m">
              Are you sure you want to delete the module?
            </P>

            <Div className="flex justify-content-start gap-2">
              <Btn.Button
                variant="danger"
                className="w-50"
                onClick={() => deleteCourse.mutate(moduleToDel)}
              >
                Delete
              </Btn.Button>
              <Btn.Custom
                className="text-dark fw-medium"
                onClick={() => setModuleToDel(false)}
              >
                Cancel
              </Btn.Custom>
            </Div>
          </Div>
        </If>
      </Popup>

      <If cond={!user.hasActivePlan && !user.loading}>
        <Div className="page flex py-3 bg-danger text-white fs-sm">
          <Span>
            You don’t currently have an active Proprep plan.{" "}
            <A to="/pricing" className="text-white" decoration>
              Click here to choose one.
            </A>
          </Span>
        </Div>
      </If>

      <If cond={user.isTrial}>
        <Div className="page flex py-3 bg-success text-white fs-sm">
          <Span>
            You have {Math.floor(user.trialEnd)} days left in your free trial{" "}
            <A to="/pricing" className="text-white" decoration>
              Click here
            </A>{" "}
            to unlock.
          </Span>
        </Div>
      </If>
      <Div className="page py-5">
        <Div className="flex-wrap justify-content-between">
          <H1>{locale.my_modules.headline}</H1>
          <Btn.Outlined to="/onboard" className="px-4 py-2 fw-medium">
            {locale.my_modules.cta}
          </Btn.Outlined>
        </Div>

        <br />
        <br />
        <br />

        <If cond={isLoading}>
          <Div className="page-50 flex">
            <Loader color="primary" size="50px" />
          </Div>
        </If>

        <If cond={!data?.coursesList?.length && !isLoading}>
          {" "}
          <MdNoModules />
        </If>
        <If cond={data?.coursesList?.length && !isLoading}>
          <ModulesWrraper>
            {data?.coursesList
              ?.slice(0)
              .reverse()
              .map((module, index) => (
                <ModuleCard
                  key={index}
                  color={getModuleColor(module.courseId)}
                  icon={getModuleIcon(module.courseId)}
                  title={write(module.courseName)}
                  description={write(module.showChapterLabel, {
                    max: 75,
                    ellipsis: true,
                  })}
                  title_link={module.courseLink}
                  video_label={write(module.showChapterPlaylistLabel)}
                  video_link={module.videoLink}
                  progress={write(module.percentCompletedCourse, {
                    max: 1,
                    maxAfter: ".",
                    pop: "%",
                  })}
                  thumbnail={write(module.imgUrl, {
                    shift: "https://proprep.com/",
                  })}
                  onDelete={() => setModuleToDel(module.courseId)}
                  onView={() => navigate(module.courseLink)}
                />
              ))}
          </ModulesWrraper>
        </If>
      </Div>
    </>
  );
}
