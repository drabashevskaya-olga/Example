import React from "react";
import PartnerHeader from "./parts/header";
import PartnerHero from "./parts/hero";
import PartnerCounters from "./parts/counters";
import PartnerTopics from "./parts/topics";
import PartnerVideo from "./parts/video";
import PartnerImage from "./parts/image";
import PartnerContact from "./parts/contact";

export default function PartnersPage() {
  return (
    <>
      <PartnerHeader />
      <PartnerHero />
      <PartnerCounters />
      <PartnerTopics />
      <PartnerVideo />
      <PartnerImage />
      <PartnerContact />
    </>
  );
}
