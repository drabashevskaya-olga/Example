import React from "react";
import ChsModule from "./parts/module";
import ChsNoModules from "./parts/no_modules";

export default function ChsModules({
  courses,
  addModule,
  delCourse,
  viewSyllabus,
}) {
  if (!courses?.length) {
    return <ChsNoModules />;
  }
  return (
    <>
      {courses?.map((course, index) => (
        <ChsModule
          index={index}
          {...course}
          addModule={addModule}
          delCourse={delCourse}
          viewSyllabus={viewSyllabus}
        />
      ))}
    </>
  );
}
