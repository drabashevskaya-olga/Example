import React from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.scss";
import VidPlaylist from "./parts/playlist";
import VidUpNext from "./parts/up_next";
import VidComments from "./parts/comments";
import {
  APIgetVideoSidebar,
  APIgetVideoPageDetails,
} from "../../API/all/dashboard";
import { useQuery } from "react-query";
import If from "../../components/renderIf";
import Loader from "../../components/loader";
import VideoPlayer from "./parts/video";
import VidAbout from "./parts/about";
import VidBreadcrums from "./parts/breadcrums";
import Head from "../../components/Head";
import { Div } from "../../parts/general";

export default function VideoPage() {
  const { academicInstitution, program, course, chapter, playlist, video } =
    useParams();
  const LINK = `/${academicInstitution}/${program}/${course}/${chapter}/${playlist}/${video}`;

  const sidebar = useQuery(
    ["sidebar", academicInstitution, program, course, chapter, playlist, video],
    () => APIgetVideoSidebar(LINK),
    {
      retry: false,
      retryOnMount: false,
    }
  );

  const VideoPage = useQuery(
    [
      "VideoPage",
      academicInstitution,
      program,
      course,
      chapter,
      playlist,
      video,
    ],
    () => APIgetVideoPageDetails(LINK),
    {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  // if (sidebar.isLoading || VideoPage.isLoading) {
  //   return (
  //     <div className="page-50 flex">
  //       <Loader color="primary" size="50px" />
  //     </div>
  //   );
  // }
  return (
    <>
      <Head slug={"/video_page"} />
      <VidBreadcrums videoName={VideoPage.data?.video?.name} />
      <div className={styles.Container}>
        <div className={styles.Playlist}>
          <If
            cond={
              (sidebar.isError || !sidebar.data?.length) && !sidebar.isLoading
            }
          >
            an error accured while loading playlist
          </If>
          <If
            cond={
              !(
                (sidebar.isError || !sidebar.data?.length) &&
                !sidebar.isLoading
              )
            }
          >
            <VidPlaylist data={sidebar.data} active_link={LINK} />
          </If>
        </div>
        <div className={styles.Video}>
          <VideoPlayer
            video={VideoPage.data?.video}
            token={VideoPage.data?.token}
            subtitles={VideoPage.data?.subTitles}
            downloadWorkbookLink={VideoPage.data?.downloadWorkbookLink || ""}
          />
        </div>
        <div className={styles.UpNext}>
          <If cond={!!VideoPage.data?.nextVideo?.name}>
            <VidUpNext data={VideoPage.data?.nextVideo} />
          </If>
        </div>
        <div className={styles.Comments}>
          <VidComments link={LINK} />
        </div>
        <div className={styles.About}>
          <VidAbout />
        </div>
      </div>
    </>
  );
}
