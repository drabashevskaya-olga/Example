import React, { useContext } from "react";
import { UserCtx } from "../../../../Ctx/User";
import { H1, B, A } from "../../../../parts/txt";
import { Div } from "../../../../parts/general";
import { BsShieldCheck } from "react-icons/bs";
import CpNavbar from "./navbar";
import Breadcrums from "../../../../components/breadcrums";
import colorMap from "../../../../components/color_map";
import generalCourses from "../../../../components/generalCourses";
import If from "../../../../components/renderIf";

export default function CpHeadline(props) {
  const { name, id, isCustomized, course, academicName, academicLink } = props;
  const { user } = useContext(UserCtx);

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

  const transformData = (course) => {
    return course
      ?.replaceAll("-", " ")
      ?.split(" ")
      ?.map((word) => {
        if (
          (word[0] === "i" && word[1] === "i") ||
          (word[0] === "i" && !word[1])
        )
          return `${word?.toUpperCase() || ""} `;
        else return `${word[0]?.toUpperCase() || ""}${word?.slice(1) || ""} `;
      })
      ?.join("");
  };

  const getAcademyRoute = () => {
    if (academicName !== "General") return `/${academicName}/${academicName}`;
    else return "/courses/all";
  };

  const getModulesRoute = () => {
    if (user.type === "guest") return "/courses/all";
    else return "/mycourses";
  };

  return (
    <>
      <Div style={{ background: getModuleColor(id) }}>
        <Div className="page flex-col pt-5 pb-3 align-items-start">
          <Breadcrums>
            <A to="/">Home</A>
            <A to={getModulesRoute()}>Modules</A>
            <A to={academicLink}>{academicName}</A>
            <A no-decoration disabled>
              {transformData(course)}
            </A>
          </Breadcrums>
          <H1>{name}</H1>
          <If cond={isCustomized}>
            <B className="text-primary flex gap-2">
              <BsShieldCheck /> Customized to your school
            </B>
          </If>
        </Div>
      </Div>
      <CpNavbar className="page" style={{ background: "white" }} />
      {/*  style={{ background: getModuleColor(id) }} */}
    </>
  );
}
