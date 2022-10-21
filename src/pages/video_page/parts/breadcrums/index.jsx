import React from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../../../../components/breadcrums";
import * as Txt from "../../../../parts/txt";

export default function VidBreadcrums({ videoName }) {
  const { academicInstitution, program, course } = useParams();

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

  return (
    <Breadcrums className="page py-3 bg-white shd-4 justify-content-start flex-wrap">
      <Txt.A to="/">Home</Txt.A>
      <Txt.A to={`/${academicInstitution}/${program}/${course}`}>
        {transformData(course)}
      </Txt.A>
      <Txt.A>{videoName}</Txt.A>
    </Breadcrums>
  );
}
