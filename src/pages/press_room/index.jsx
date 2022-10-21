import React, { useState } from "react";
import { Div } from "../../parts/general";
import { XL, P, A } from "../../parts/txt";
import styles from "./style.module.scss";
import { Custom, Button } from "../../parts/button";
import If from "../../components/renderIf";
import LogoIcon from "../../assets/Icons/Icons/logoIcon";

import AccessProjectPR from "../../assets/press_room/AccessProjectPR.pdf";

const RenderingArrayOfObjects = (data, showIcons) =>
  data.map((element) => (
    <Div className="d-flex flex-column flex-md-row align-items-center my-4">
      <If cond={showIcons}>
        <Div>
          <LogoIcon className="mx-5" />
        </Div>
      </If>
      <Div>
        <Div className={styles.Date}>{element.date}</Div>
        <A
          no-decoration
          href={element.url}
          className={styles.Link}
          target="_blank"
        >
          {element.label}
        </A>
      </Div>
    </Div>
  ));

export default function PressRoom() {
  const [showNews, setShowNews] = useState(true);

  const handleClick = () => setShowNews((showNews) => !showNews);

  const newsList = [
    {
      date: "August 14,2022",
      label: "Proprep and the access project launch partnership",
      url: AccessProjectPR,
    },
    {
      date: "July 25,2022",
      label:
        "Beyond Labz and ProPrep announces its partnership to help STEM students worldwide",
      url: "https://www.proprep.uk/Images/press-room/documents/beyond_labz_press_release.pdf",
    },
    {
      date: "March 15, 2022",
      label: "Proprep launches new B2B offering: Boost",
      url: "https://www.proprep.uk/Images/press-room/documents/boost_press_release.pdf",
    },
    {
      date: "March 17, 2021",
      label: "The future of blended learning - Business Reporter",
      url: "https://business-reporter.co.uk/technology/the-future-of-blended-learning",
    },
    {
      date: "May 27, 2021",
      label: "The future of blended learning - The Telegraph",
      url: "https://www.telegraph.co.uk/business/business-reporter/pro-prep/",
    },
  ];

  const pressList = [
    {
      date: "May 27, 2021",
      label: "The future of blended learning - The Telegraph",
      url: "https://www.telegraph.co.uk/business/business-reporter/pro-prep/",
    },
  ];

  return (
    <>
      <Div className={`page py-5 pb-md-5 text-center ${styles.Container}`}>
        <XL className="text-center pt-5 pb-5">Press Room</XL>
        <P>
          We’re proud to be at the forefront of the education technology
          industry,
          <br />
          and our growing presence in the media reflects this.
        </P>
        <Div
          className={`d-flex flex-column flex-lg-row align-items-center justify-content-center py-5 ${styles.Buttons}`}
        >
          <Custom
            className={`py-3 ${!showNews ? null : styles.ActiveButton}`}
            onClick={handleClick}
          >
            In the News
          </Custom>
          <Custom
            className={`py-3 ${showNews ? null : styles.ActiveButton}`}
            onClick={handleClick}
          >
            Press Releases
          </Custom>
        </Div>
      </Div>
      <Div className="page py-5">
        <If cond={showNews}>{RenderingArrayOfObjects(newsList, true)}</If>
        <If cond={!showNews}>{RenderingArrayOfObjects(pressList, false)}</If>
        <Button className="px-5 py-3 mx-auto">Show more</Button>
      </Div>
    </>
  );
}
