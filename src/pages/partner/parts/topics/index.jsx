import React, { useState } from "react";
import styles from "./style.module.scss";
import * as SVGS from "../../../../assets/svgs";
import { Div } from "../../../../parts/general";
import * as Txt from "../../../../parts/txt";
import Popup from "../../../../components/popup";
import { Custom } from "../../../../parts/button";
import { HiCheck } from "react-icons/hi";
import If from "../../../../components/renderIf";

export default function PartnerTopics() {
  const [showModal, setShowModal] = useState(false);
  const [videoData, setSideoData] = useState(false);

  const showPreviewModal = (data) => {
    if (data) {
      setSideoData(data);
      setShowModal(true);
    }
  };

  function VideoModal() {
    return (
      <>
        <Popup
          show={showModal}
          onHide={() => setShowModal(false)}
          title={videoData.title}
          centered
        >
          <embed
            src={`https://www.youtube.com/embed/${videoData.YouTubeVideoId}?autohide=1&autoplay=0`}
            wmode="transparent"
            type="video/mp4"
            width="100%"
            height="250"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title="Keyboard Cat"
          ></embed>
          <ul className={`my-4 ${styles.List}`}>
            {videoData.ModalVideoData.map((item, index) => (
              <li className={styles.ListItem} key={index}>
                <HiCheck className={styles.CheckMark} /> {item}
              </li>
            ))}
            <li className={styles.ListItem}>
              <HiCheck className={styles.CheckMark} /> Access from all devices
            </li>
            <li className={styles.ListItem}>
              <HiCheck className={styles.CheckMark} /> Customised to your
              syllabus
            </li>
          </ul>
          <Div className={styles.PopupWrapper}>
            <Txt.A
              to="#sign-up-anchor"
              className={styles.Started}
              no-decoration
            >
              Get started
            </Txt.A>
          </Div>
        </Popup>
      </>
    );
  }

  const Cards = [
    {
      title: "Linear algebra",
      svg: <SVGS.LinearAlgebra />,
      color: "#009FB7",
      YouTubeVideoId: "IbSIYffY3TM",
      ModalVideoData: [
        "48 hours of videos, on demand",
        "10 downloadable resources",
      ],
    },
    {
      title: "Calculus",
      svg: <SVGS.Maths />,
      color: "#F4989C",
      YouTubeVideoId: "gXs_SAmTVZo",
      ModalVideoData: [
        "77 hours of videos, on demand",
        "9 downloadable resources",
      ],
    },
    {
      title: "Probability",
      svg: <SVGS.Probability />,
      color: "#8CCFFF",
      YouTubeVideoId: "K_96-AMmEqQ",
      ModalVideoData: [
        "48 hours of videos, on demand",
        "10 downloadable resources",
      ],
    },
    {
      title: "Statistics",
      svg: <SVGS.Statistics />,
      color: "#0BC9CD",
      YouTubeVideoId: "ST1-DLKnlf8",
      ModalVideoData: [
        "36 hours of videos, on demand",
        "18 downloadable resources",
      ],
    },
    {
      title: "Physics",
      svg: <SVGS.Physics />,
      color: "#8A84E2",
      YouTubeVideoId: "h1VP0sRFG9M",
      ModalVideoData: [
        "101 hours of videos, on demand",
        "29 downloadable resources",
      ],
    },
    {
      title: "Chemistry",
      svg: <SVGS.GeneralChemistry />,
      color: "#E2B64A",
      YouTubeVideoId: "mQhKvJ2AStY",
      ModalVideoData: [
        "4 hours of videos, on demand",
        "13 downloadable resources",
      ],
    },
    {
      title: "Complex functions",
      svg: <SVGS.ComplexAnalysis />,
      color: "#E08DAC",
      YouTubeVideoId: "ZosK5e_0nPs",
      ModalVideoData: [
        "4 hours of videos, on demand",
        "13 downloadable resources",
      ],
    },
    {
      title: "Ordinary differential equations",
      svg: <SVGS.GeneralChemistry />,
      color: "#5299D3",
      YouTubeVideoId: "6Tl0FxM7ucY",
      ModalVideoData: [
        "31 hours of videos, on demand",
        "9 downloadable resources",
      ],
    },
  ];

  return (
    <>
      <Div className={`mt-5 ${styles.Container}`}>
        <Txt.H2 className="text-center fs-xl my-5 position-relative">
          Click on a topic to see what’s waiting for you
        </Txt.H2>
        <Div className={styles.Cards}>
          {Cards.map((card, index) => (
            <Div className={styles.CardItem} key={index}>
              <Div className={styles.Card} style={{ fill: card.color }}>
                {card.svg}
                <Txt.Span className="fs-m fw-medium my-4 text-center">
                  {card.title}
                </Txt.Span>
                <Custom
                  onClick={() => showPreviewModal(card)}
                  className={styles.Link}
                  no-decoration
                >
                  Preview
                </Custom>
              </Div>
            </Div>
          ))}
        </Div>
        <If cond={videoData != ""}>
          <VideoModal />
        </If>
      </Div>
    </>
  );
}
