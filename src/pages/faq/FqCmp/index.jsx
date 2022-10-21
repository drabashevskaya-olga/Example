import {
  AccordionContainer,
  AccordionItem,
} from "../../../components/accordion";
import React from "react";
import { Div } from "../../../parts/general";
import { H2, H3, P } from "../../../parts/txt";
import parse from "html-react-parser";

const json = [
  {
    head: `What makes proprep more effective than other online study
    platforms?`,
    body: `Proprep was founded by professors who understand the challenge
    students face. Our team works around the clock to create quality
    material that will support and facilitate true learning. With over
    60,000 videos tutorials and unlimited customization options, our
    students receive exactly what they need to succeed — no more, no
    less. The result is a deeper understanding of the material,
    improved problem-solving techniques, and better marks.`,
  },

  {
    head: `Do courses that I purchase have a time limit?`,
    body: `The purchase of any course is valid for 12 months from the date of purchase.`,
  },

  {
    head: `What is your money-back guarantee policy?`,
    body: `If you purchase a course and feel that we don't live up to your expectations, you have 14 days to change your mind. Please <a href="/contact-us">contact us</a> and let us know.`,
  },
  {
    head: `I still have questions. HELP!`,
    body: `No problem! You can chat with us right now by clicking <a href="/contact-us">this link</a>. Whatever you need, we're here for you!`,
  },
];

export default function FqCmp() {
  return (
    <>
      <H2 className="text-center pt-5">Frequently Asked Questions</H2>
      <AccordionContainer default={0}>
        <Div className="page my-5">
          {json.map((item, index) => (
            <AccordionItem key={index} eventKey={index} className="my-3">
              <Div className="p-2">
                <H3>{item.head}</H3>
              </Div>
              <Div>
                <P className="mb-0">{parse(item.body)}</P>
              </Div>
            </AccordionItem>
          ))}
        </Div>
      </AccordionContainer>
    </>
  );
}
