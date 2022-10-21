import React, { useEffect, useRef } from "react";
import { UserCtx } from "../../../../Ctx/User";
import { Div } from "../../../../parts/general";
import * as Txt from "../../../../parts/txt";
import * as Btn from "../../../../parts/button";
import styles from "./style.module.scss";
import If from "../../../../components/renderIf";
import { BiEdit } from "react-icons/bi";
import StreamPlayer from "./stream";

export default function VideoPlayer(props) {
  const { video, subtitles, token, downloadWorkbookLink } = props;

  const { user } = React.useContext(UserCtx);
  const [sources, setSources] = React.useState([]);

  useEffect(() => {
    //Type 1 = First 1 minutes, Type 2 = All movie.
    let videoType = 2;

    if (user.type === "guest") {
      videoType = 1;
    }

    const manifest = true ? "manifest.mpd" : "playlist.m3u8"; //manifest.mpd is good for PC or Android, playlist.m3u8 is good for IOS or PC
    const accessToken = "929cf612980d45b8bc6cca4f896b54de";

    const videoUrl = `https://58be68046f799.streamlock.net:443/SaitLabs/${video?.id}/#MENIFEST#?tID=${video?.chapterTopicId}&videoView=${videoType}&accessToken=${accessToken}`;

    setSources(
      manifest == "playlist.m3u8"
        ? [
            {
              /*== iOS (hlsjs) ==*/
              type: "application/x-mpegurl",
              src: videoUrl.toString().replace("#MENIFEST#", manifest),
            },
            {
              /*== PC (fall back from hlsjs) ==*/
              type: "application/dash+xml",
              // HE-AAC audio where it plays
              dashCodecs: "avc1.42c01e,mp4a.40.5",
              src: videoUrl.toString().replace("#MENIFEST#", manifest),
            },
          ]
        : [
            {
              /*== PC (fall back from hlsjs) ==*/
              type: "application/dash+xml",
              // HE-AAC audio where it plays
              dashCodecs: "avc1.42c01e,mp4a.40.5",
              src: videoUrl.toString().replace("#MENIFEST#", manifest),
            },
            {
              /*== Android (fallback from hlsjs) ==*/
              type: "application/dash+xml",
              // LC-AAC audio on Android
              src: videoUrl.toString().replace("#MENIFEST#", manifest),
            },
          ]
    );
  }, [props]);

  return (
    <>
      <Div className={styles.Container}>
        <Div className={styles.Headline}>
          <Txt.H2>{video?.name || "Loading..."}</Txt.H2>
          <If cond={user.role === "admin"}>
            <Div>
              <Btn.Button
                target="_blank"
                href={`https://stage.proprep.com/Admin/Videos/VideoMetaData?VideoId=${video?.id}`}
              >
                Edit MetaData
              </Btn.Button>
              <Btn.Button
                target="_blank"
                href={`https://stage.proprep.com/Admin/Course/Update/${video?.id}`}
              >
                <BiEdit />
              </Btn.Button>
            </Div>
          </If>
        </Div>

        <Div className={styles.Video}>
          <If cond={sources.length}>
            <StreamPlayer
              src={sources}
              subtitles={subtitles}
              token={token}
              downloadWorkbookLink={downloadWorkbookLink}
            />
          </If>
        </Div>
      </Div>
    </>
  );
}
