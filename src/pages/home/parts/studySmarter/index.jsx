import React from "react";
import { H2, H3, P } from "../../../../parts/txt";
import FirstImage from "../../../../assets/studySmarter/first";
import SecondImage from "../../../../assets/studySmarter/second";
import ThirdImage from "../../../../assets/studySmarter/third";
import { BasicCard, BasicCardWrraper } from "../../../../components/basicCard";

export default function StudySmarter() {
  return (
    <div className="page bg-light py-5">
      <H2 className="text-center mb-5">Study smarter, not harder</H2>
      <BasicCardWrraper>
        <BasicCard>
          <FirstImage />
          <H3>Say goodbye to exam anxiety</H3>
          <P>
            Studying with our videos and practice questions empowers you to
            tackle your toughest subjects with confidence.
          </P>
        </BasicCard>
        <BasicCard>
          <SecondImage />
          <H3>Excel in your studies</H3>
          <P>
            With over 10 years of teaching experience and video tutorials on
            50,000+ topics, we know exactly what students need to succeed.
          </P>
        </BasicCard>
        <BasicCard>
          <ThirdImage />
          <H3>Enjoy more free time</H3>
          <P>
            When you study smart, you'll boost your understanding while cutting
            down your work schedule, leaving you with more free time to enjoy
            uni life.
          </P>
        </BasicCard>
      </BasicCardWrraper>
    </div>
  );
}
