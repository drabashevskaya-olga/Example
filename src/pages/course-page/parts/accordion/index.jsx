import {
  AccordionContainer,
  AccordionItem,
} from "../../../../components/accordion";
import { CsItemHead, CsItemBody } from "../item";
import { write } from "../../../../API/useful_functions";
import { useEffect, useState } from "react";

export default function CsAccordion(props) {
  const { chapters, userHasCourse } = props;

  if (!chapters) {
    return null;
  }

  return (
    <AccordionContainer>
      <div className="flex-col gap-3">
        {chapters.map((item, index) => (
          <AccordionItem key={index} eventKey={index} className="w-100">
            <CsItemHead
              open={!index}
              name={write(item.name)}
              progress={write(item.percentCompleted)}
              time={write(item.sumHours)}
              downloadLink={item.downloadWorkbookLink}
              userHasCourse={userHasCourse}
            />
            <CsItemBody
              items={item.chapterTopics}
              userHasCourse={userHasCourse}
            />
          </AccordionItem>
        ))}
      </div>
    </AccordionContainer>
  );
}
