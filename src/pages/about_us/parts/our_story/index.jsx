import React from "react";
import { H2, P } from "../../../../parts/txt";
import { Div } from "../../../../parts/general";

export default function AboutUsOurStory() {
  return (
    <Div className={`text-center page py-5 flex-col`}>
      <H2>Our story</H2>
      <P className="paragraph">
        Proprep values inspiring excellence, credibility, diversity, achievement
        and creativity. Our team works around the clock to provide quality
        material from esteemed academic leaders to support the learning process
        for STEM students in the UK. With over 50,000 videos and limitless
        options for module customisation, students can study the way that best
        suits them. The result is deeper understanding, improved problem-solving
        techniques, and better marks for the student.
      </P>
    </Div>
  );
}
