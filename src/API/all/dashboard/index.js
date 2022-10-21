import { GET } from "../..";

const APIgetMyModules = () =>
  GET("/Course/GetUserCourses").then((res) => res.data);

const APIgetCourse = (query = {}) =>
  GET(`Course/GetCourseDetails`, { params: query }).then(({ data }) => data);

const APIIsCustomized = (link) =>
  GET("Course/isCustomized", { params: { link } }).then(({ data }) => data);

const APIdelCourse = (query = {}) =>
  GET(`Users/DeleteUserCourse`, { params: query });

const APIgetVideoSidebar = (link) =>
  GET("/Course/GetVideoPageSidebar", { params: { link } }).then(
    ({ data }) => data
  );

const APIaddCourse = (id) => GET(`/Users/AddCourseToUser`, { params: { id } });

const APIgetVideoPageDetails = (link) =>
  GET("/Course/GetVideoPageDetails", { params: { link } }).then(
    ({ data }) => data
  );

const APIgetRelatedModules = (courseId) =>
  GET("/Course/GetSuggestedCourses", { params: { courseId } }).then(
    ({ data }) => data
  );

export {
  APIgetMyModules,
  APIgetCourse,
  APIdelCourse,
  APIgetVideoSidebar,
  APIaddCourse,
  APIgetVideoPageDetails,
  APIgetRelatedModules,
  APIIsCustomized,
};
