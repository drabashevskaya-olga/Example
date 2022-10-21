import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExtraSupportP from "./parts/extra_support";
import HomeHero from "./parts/hero";
import OurPartners from "./parts/our_partners";
import RefferalProgram from "./parts/refferal_program";
import StartLearning from "./parts/start_learning";
import StudySmarter from "./parts/studySmarter";
import BiteSized from "./parts/bite_sized";
import Why500K from "./parts/Why500k";
import WatchAnywhere from "./parts/watch_anywhere";
import GetStarted from "./parts/get_started";
import Head from "../../components/Head";
import RecommPage from "./parts/recomm";
import ReferToAFriend from "../../components/refer_to_friend";
import HowItWorks from "./parts/howIWorksPopup";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showRefferal, setShowRefferal] = useState(true);

  useEffect(() => {
    setShowModal(window.location.href.includes("#see-how-it-works"));
    setShowRefferal(window.location.href.includes("#refer-to-a-friend"));
  }, [location]);

  return (
    <>
      <ReferToAFriend show={showRefferal} onHide={() => navigate("/")} />
      <HowItWorks show={showModal} onHide={() => navigate("/")} />

      <Head slug="/" />
      <HomeHero />
      <StartLearning />
      <ExtraSupportP />
      <StudySmarter />
      <OurPartners />
      <RefferalProgram />
      <BiteSized />
      <Why500K />
      <RecommPage />
      <WatchAnywhere />
      <GetStarted />
    </>
  );
}
