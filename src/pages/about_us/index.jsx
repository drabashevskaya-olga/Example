import React from "react";
import RecommPage from "../home/parts/recomm";
import AboutUsHero from "./parts/hero";
import AboutUsOurMission from "./parts/our_mission";
import BlueStats from "./parts/stats";
import BiteSized from "../home/parts/bite_sized";
import AboutUsOurStory from "./parts/our_story";
import Head from "../../components/Head";
import OurTeam from "./parts/our_team";

export default function AboutUs() {
  return (
    <>
      <Head slug="/about-us" />
      <AboutUsHero />
      <AboutUsOurMission />
      <BlueStats />
      <AboutUsOurStory />
      <OurTeam />
      <RecommPage />
      <BiteSized />
    </>
  );
}
