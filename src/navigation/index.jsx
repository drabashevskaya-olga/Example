import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserCtx } from "../Ctx/User";
import Build from "../pages/building-zone";
import SignUp from "../pages/auth/sign-up";
import Login from "../pages/auth/login";
import Home from "../pages/home";
import ServerError from "../pages/ServerErrors";
import ContactUs from "../pages/contact_us";
import PrivacyNotice from "../pages/privacy_notice";
import CookiePolicy from "../pages/cookie_policy";
import TermsOfService from "../pages/terms_of_service";
import AboutUs from "../pages/about_us";
import FAQ from "../pages/faq";
import Pricing from "../pages/pricing";
import Onboard from "../pages/onboard";
import ChooseCourse from "../pages/choose_course";
import MyModules from "../pages/my_modules";
import CoursePage from "../pages/course-page";
import VideoPage from "../pages/video_page";
import Purchase from "../pages/purchase";
import Careers from "../pages/careers";
import Settings from "../pages/settings";
import Signout from "../pages/auth/signout";
import PressRoom from "../pages/press_room";
import ChooseUni from "../pages/auth/choose_uni";
import RegisterToken from "../pages/auth/register_token";
import PartnersPage from "../pages/partner";
import PaymentSuccess from "../pages/purchase/success";
import QuestionsAnswers from "../pages/questions_answers";
import Redirector from "../components/redirector";

export default function Navigator() {
  const { user } = useContext(UserCtx);

  return (
    <Routes>
      {/* everyone */}
      <Route path="/build" element={<Build />} />
      <Route path="/" element={<Home />} />
      <Route path="/press-room" element={<PressRoom />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/partner" element={<PartnersPage />} />
      <Route path="/privacy-notice" element={<PrivacyNotice />} />
      <Route path="/cookies-policy" element={<CookiePolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/payment/success" element={<PaymentSuccess />} />
      <Route path="/onboard" element={<Onboard />} />
      <Route path="/qa" element={<QuestionsAnswers />} />

      <Route path="/qa/:qaURL" element={<QuestionsAnswers />} />

      <Route
        path="/subscription/:subId"
        element={
          <Redirector
            redirect="/pricing#cards"
            cond={user.isSubscription}
            no_return={true}
          >
            <Purchase />
          </Redirector>
        }
      />

      <Route
        path="/:academicInstitution/:program"
        element={
          <Redirector
            redirect="/choose-university"
            cond={!user.loading && !user.isAcademyId && user.type !== "guest"}
          >
            <ChooseCourse />
          </Redirector>
        }
      />
      <Route
        path="/:academicInstitution/:program/:course"
        element={
          <Redirector
            redirect="/choose-university"
            cond={!user.loading && !user.isAcademyId && user.type !== "guest"}
          >
            <CoursePage />
          </Redirector>
        }
      />
      <Route
        path="/:academicInstitution/:program/:course/:chapter/:playlist/:video"
        element={
          <Redirector
            redirect="/choose-university"
            cond={!user.loading && !user.isAcademyId && user.type !== "guest"}
          >
            <VideoPage />
          </Redirector>
        }
      />

      {user.loading || user.type === "guest" ? (
        <>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/sign-up/:token/:platform" element={<RegisterToken />} />
          <Route path="/sign-in/:token/:platform" element={<RegisterToken />} />
        </>
      ) : null}

      {user.isAcademyId || user.type === "guest" ? null : (
        <Route path="/choose-university" element={<ChooseUni />} />
      )}

      {user.type !== "guest" ? (
        <>
          <Route path="/signout/:token" element={<Signout />} />
          <Route path="/user/settings" element={<Settings />} />
          <Route path="/mycourses" element={<MyModules />} />
        </>
      ) : null}

      <Route path="/error/:code" element={<ServerError />} />

      <Route path="*" element={<ServerError code="401" />} />
    </Routes>
  );
}
