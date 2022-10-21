import { GET, POST } from "../../";

const APIfindAcademyByName = (query) =>
  GET(`/course/findacademicinstitutionbyname`, { params: query }).then(
    ({ data }) => data
  );

const APIfindTextbookByName = (query) =>
  GET(`/course/FindTextbookByName`, { params: query }).then(({ data }) => data);

const APIGetPopularTextbooks = () =>
  GET("/Course/GetTextbooksForMenu").then(({ data }) => data);

const APIGetUploadSyllabus = (doc) => POST("/Course/UploadSyllabus", doc);

const APIgetAcademyPage = (link) =>
  GET("/Course/GetAcademicInstitutionPage", { params: link }).then(
    ({ data }) => data
  );

const APIGet2PopularTextbooks = () =>
  GET("/Course/GetPopularTextBooks").then(({ data }) => data);
const APIGet2PopularAcademies = () =>
  GET("/Course/GetPopularAcademicInstitution").then(({ data }) => data);

const APIgetPopularModules = () =>
  GET("/Course/GetGeneralCourses").then(({ data }) => data);

const APIuploadSyllabus = (form) => POST("/Course/UploadSyllabus", form);

const APIgetGeneralCourses = () =>
  GET("/Course/GetGeneralCourses").then(({ data }) => data);

const APIcontactUs = (form) => POST("/Users/ContactUs", form);

const APIPostComment = (link, text) =>
  POST("/Course/AddVideoComment", { link, text });

const APIReadComments = (link) =>
  GET("/Course/GetVideoComments", { params: { link } }).then(
    ({ data }) => data
  );

export {
  APIPostComment,
  APIReadComments,
  APIfindAcademyByName,
  APIfindTextbookByName,
  APIGetPopularTextbooks,
  APIGetUploadSyllabus,
  APIgetAcademyPage,
  APIuploadSyllabus,
  APIGet2PopularTextbooks,
  APIGet2PopularAcademies,
  APIgetPopularModules,
  APIgetGeneralCourses,
  APIcontactUs,
};
