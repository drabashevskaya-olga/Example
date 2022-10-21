import React, { useEffect, useRef, useState } from "react";
import "@flowplayer/player/flowplayer.css";
import flowplayer from "@flowplayer/player";
import * as Txt from "../../../../../parts/txt";
import * as Btn from "../../../../../parts/button";
import { BiFullscreen } from "react-icons/bi";
import styles from "../style.module.scss";
import { Select } from "../../../../../parts/form";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import If from "../../../../../components/renderIf";

export default function StreamPlayer(props) {
  const { src, subtitles, token, downloadWorkbookLink } = props;

  const video = useRef(null);
  const transcripts = useRef(null);
  const [crrSubtitle, setCrrSubtitle] = useState(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(
    localStorage.getItem("showSubtitles") ?? true
  );
  const crrSrc = useRef(null);

  useEffect(() => {
    video.current = flowplayer("#stream_player", {
      src,
      autoplay: true,
      muted: false,
      token:
        "eyJraWQiOiI5MnpZdWFFak93cVQiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6MjIsXCJpZFwiOlwiOTJ6WXVhRWpPd3FUXCJ9IiwiaXNzIjoiRmxvd3BsYXllciJ9.EoufHvzmD2eEDGbxuOuOSf8IVZaJQg9vm0qXR-JQeAYPdy3kSc4bUQ151gjFSAd6DTLVMC-13d9AaBtzOsIhhA",
    });
  }, []);

  useEffect(() => {
    if (
      src &&
      JSON.stringify(src) !== crrSrc.current &&
      src.length === 2 &&
      video.current
    ) {
      crrSrc.current = JSON.stringify(src);
      video.current.setSrc(src);

      video.current?.addEventListener("ended", () => {
        console.log("VIDEO END");
      });
    }

    const timeInterval = setInterval(handleTrancripts, 250);

    return () => clearInterval(timeInterval);
  }, [src, video.current]);

  // ! dev only
  // ? removes the stupid logo from the video player

  // useEffect(() => {
  //   const Interval = setInterval(() => {
  //     const elem = document.querySelector(
  //       'a[href="https://explorer.flowplayer.com"]'
  //     );

  //     if (elem) {
  //       elem.style.zIndex = -1;
  //       clearInterval(Interval);
  //     }
  //   }, 500);

  //   return () => clearInterval(Interval);
  // }, [props]);

  const handleTrancripts = () => {
    if (!subtitles.length || !Array.isArray(subtitles)) return;
    subtitles?.forEach((subtitle, index) => {
      const crr = video.current.currentTime;
      const start = convertTimeToSeconds(subtitle.start);
      const end = convertTimeToSeconds(subtitle.end);

      if (crr >= start && crr < end) {
        const active = transcripts.current.children[index];
        const activeHeight = active.offsetHeight;

        setCrrSubtitle(subtitle.text);

        transcripts.current.scrollTop = activeHeight * index - 100;
        active.setAttribute("data-active", "true");
      } else {
        transcripts.current.children[index].setAttribute(
          "data-active",
          "false"
        );
      }
    });
  };

  function moveTo(to) {
    to = convertTimeToSeconds(to);
    video.current.currentTime = to;
  }
  function fullscreen() {
    video.current.toggleFullScreen();
  }
  function setSpeed(val) {
    video.current.playbackRate = val;
  }

  const convertTimeToSeconds = (time) => {
    try {
      const [min, sec] = time.split(":");
      return parseInt(min) * 60 + parseInt(sec);
    } catch {
      return 0;
    }
  };

  const handleShowSubtitles = () => {
    setShowSubtitles(!showSubtitles);
    localStorage.setItem("showSubtitles", showSubtitles ? "" : true);
  };

  return (
    <>
      <div id="stream_player" className={styles.stream_player}>
        <If cond={showSubtitles}>
          <div className="fp-captions">
            <pre className="fp-cue">{crrSubtitle}</pre>
          </div>
        </If>
      </div>

      <div className={styles.Controls}>
        <div>
          <Txt.Label>
            <Txt.Span>Player Size</Txt.Span>
            <button onClick={fullscreen}>
              <BiFullscreen />
            </button>
          </Txt.Label>
          <Txt.Label>
            <Txt.Span>Speed</Txt.Span>
            <Select defaultValue="1" onChange={(e) => setSpeed(e.target.value)}>
              <option value="0.8">0.8x</option>
              <option value="0.9">0.9x</option>
              <option value="1">1x</option>
              <option value="1.1">1.1x</option>
              <option value="1.2">1.2x</option>
              <option value="1.3">1.3x</option>
              <option value="1.4">1.4x</option>
              <option value="1.5">1.5x</option>
              <option value="1.75">1.75x</option>
              <option value="2">2x</option>
              <option value="2.25">2.25x</option>
              <option value="2.5">2.5x</option>
              <option value="3">3x</option>
            </Select>
          </Txt.Label>
          <button
            className={styles.CC}
            data-on={String(showSubtitles)}
            onClick={handleShowSubtitles}
          >
            CC
          </button>
        </div>

        <div>
          <If cond={subtitles?.length}>
            <Btn.Custom
              onClick={() => setShowTranscript((prv) => !prv)}
              data-rotate={String(showTranscript)}
            >
              Show Transcript <MdOutlineKeyboardArrowDown />
            </Btn.Custom>
          </If>
          <Btn.Button
            href={"https://proprep.com" + downloadWorkbookLink}
            download="true"
          >
            Download Workbook
          </Btn.Button>
        </div>
      </div>
      <div
        className={styles.transcripts}
        data-expanded={String(showTranscript)}
        ref={transcripts}
      >
        {!subtitles || !Array.isArray(subtitles)
          ? null
          : subtitles?.map((subtitle, index) => (
              <div key={index} onClick={() => moveTo(subtitle.start)}>
                <Txt.Label>{subtitle.start.split(".")[0]}</Txt.Label>
                <Txt.Span>{subtitle.text}</Txt.Span>
              </div>
            ))}
      </div>
    </>
  );
}
