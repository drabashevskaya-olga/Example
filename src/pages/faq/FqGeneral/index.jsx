import React from "react";
import { Div } from "../../../parts/general";
import { H3, P, A, Light } from "../../../parts/txt";

export default function FqGeneral() {
  return (
    <Div className="page row" block>
      <Div className="col-md-6 col-sm-12 p-4">
        <H3>I can't find my course. What now?</H3>
        <P>
          Contact us now and we’ll help you get started today. Simply email your
          syllabus to{" "}
          <A href="mailto:support@proprep.com">support@proprep.com</A> and we’ll
          customize a course, especially for you, within 48 hours.
        </P>
      </Div>
      <Div className="col-md-6 col-sm-12 p-4">
        <H3>Who makes the videos?</H3>
        <P>
          All our videos and content are created by school professors with at
          least 10 years of teaching experience.
        </P>
      </Div>
      <Div className="col-md-6 col-sm-12 p-4">
        <H3>
          What makes Proprep more effective than other online study platforms?
        </H3>
        <P>
          Proprep was founded by professors who understand the challenges that
          students face. Our team works around the clock to create quality
          resources that will support and facilitate comprehensive learning.
          With over 50,000 video tutorials and unlimited customization options,
          our students receive exactly what they need to succeed. The result is
          a deeper understanding of the material, improved problem-solving
          techniques, and better grades.
        </P>
      </Div>
      <Div className="col-md-6 col-sm-12 p-4">
        <H3>I have a big exam coming up. Can Proprep help me?</H3>
        <P>
          Definitely! We recommend using our course-tailored study guides to
          sharpen your skills before an exam. Solve our practice questions and
          then follow up your answers with the video explanations. Remember to
          get in touch if you don't see a specific course you need on the
          website, and we'll create resources especially for you.
        </P>
      </Div>
      <Div className="col-md-6 col-sm-12 p-4">
        <H3>
          {" "}
          How can I spread the word about Proprep to my friends and my uni?
        </H3>
        <P>There are two ways for you to spread the word about Proprep:</P>
        <ul>
          <li>
            Join our Student Ambassador programme. Get involved and gain real
            business experience, while helping your friends and earning some
            money! Check it out and <A to="/careers">apply here</A>.
          </li>
          <li>
            Proprep’s referral programme. <A to="/sign-up">Sign up</A> now, your
            first two weeks are free or log in to your Proprep account, share
            your referral link with all your friends, and for every 3 users who
            sign up for a Proprep account, you will get 1 month free.
          </li>
        </ul>
      </Div>
      <Div className="col-md-6 col-sm-12 p-4">
        <H3>Can I watch the videos on all devices?</H3>
        <P>
          Yep, you certainly can! Proprep videos are accessible on all devices.
        </P>
      </Div>
    </Div>
  );
}
