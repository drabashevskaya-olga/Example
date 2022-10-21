import React from "react";
import { H2, H3, P } from "../../../../parts/txt";
import { BasicCard, BasicCardWrraper } from "../../../../components/basicCard";

import StreamSvg from "../../../../assets/Why500K/stream.svg";
import ChunksSvg from "../../../../assets/Why500K/chunks-benefit-ic.svg";
import EinsteinSvg from "../../../../assets/Why500K/einstein.svg";

export default function Why500K() {
  return (
    <div className="page bg-white py-5 mt-5">
      <H2 className="h1 text-center mb-5">
        Why 500,000+ students globally are using Proprep
      </H2>
      <BasicCardWrraper>
        <BasicCard>
          <img
            alt="proprep learning experience image"
            loading="lazy"
            src={StreamSvg}
          />
          <H3 className="mt-4">Streamlined learning experience</H3>
          <P>
            Master any topic in 3 steps: watch the video tutorials, solve the
            practice questions, then check your understanding with the video
            solutions.
          </P>
        </BasicCard>
        <BasicCard>
          <img
            alt="proprep Absorb knowledge in short bursts image"
            loading="lazy"
            src={ChunksSvg}
          />
          <H3 className="mt-4">Absorb knowledge in short bursts</H3>
          <P>
            Our courses are broken down into short, easy-to-understand videos —
            the optimal way to learn according to neuroscientists.
          </P>
        </BasicCard>
        <BasicCard>
          <img
            alt="proprep experienced professors"
            loading="lazy"
            src={EinsteinSvg}
          />
          <H3 className="mt-4">Created and taught by experienced professors</H3>
          <P>
            We don't sacrifice on quality. All our courses are led by top
            lecturers and academics with at least 10 years of teaching
            experience.
          </P>
        </BasicCard>
      </BasicCardWrraper>
    </div>
  );
}
