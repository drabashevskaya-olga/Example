import React, { useState } from "react";
import { Div } from "../../../../parts/general";
import * as Txt from "../../../../parts/txt";
import * as Btn from "../../../../parts/button";
import * as Form from "../../../../parts/form";
import styles from "./style.module.scss";
import { CommentsWrraper, Comment } from "../../../../components/comment";
import Popuop from "../../../../components/popup";
import If from "../../../../components/renderIf";
import { UserCtx } from "../../../../Ctx/User";
import { APIReadComments, APIPostComment } from "../../../../API/all/general";
import { useQuery, useMutation } from "react-query";

export default function VidComments({ link }) {
  const { user } = React.useContext(UserCtx);
  const [comment, setComment] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const postComment = useMutation(() => APIPostComment(link, comment), {
    onSuccess: () => {
      comments.refetch();
    },
    onSettled: () => {
      setComment("");
    },
  });

  const comments = useQuery(["comments", link], () => APIReadComments(link));

  const handleSubmit = () => {
    if (comment.length > 0) {
      postComment.mutate();
    }
  };

  const handleComment = (e) => {
    if (user.type !== "guest") {
      setComment(e.target.value);
    }
  };

  const formatProfile = ({ firstName, lastName }) => {
    let res = "";

    if (typeof firstName === "string") {
      res += firstName[0];
    }

    if (typeof lastName === "string") {
      res += lastName[0];
    }

    return res;
  };

  const formatTime = (time) => {
    const date = new Date(time);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  return (
    <>
      <If cond={user.type === "guest"}>
        <Popuop show={showPopup} onHide={() => setShowPopup(false)} centered>
          <Div className="flex-col">
            <Txt.XL>Sign in!</Txt.XL>
            <Txt.P className="text-gray fs-m">
              You need a Proprep account to add comments
            </Txt.P>
            <Btn.Button to="/sign-up" variant="success" className="px-4 py-2">
              Start your free trial
            </Btn.Button>
          </Div>
        </Popuop>
      </If>
      <Div className={styles.Container}>
        <Txt.H2>Discussion</Txt.H2>
        <Form.Form>
          <Form.Textarea
            placeholder="Write your comment"
            onChange={handleComment}
            value={comment}
            onClick={() => setShowPopup(true)}
          />
          <Div className={styles.bottom}>
            <Txt.B
              className={
                postComment.isSuccess
                  ? "text-success"
                  : postComment.error
                  ? "text-danger"
                  : ""
              }
            >
              <If cond={postComment.isSuccess}>Comment added!</If>
              <If cond={postComment.error}>Comment added!</If>
            </Txt.B>
            <Div className={styles.btns}>
              <Btn.Custom
                onClick={() => setComment("")}
                className="text-secondary fw-medium"
              >
                Cancel
              </Btn.Custom>
              <Btn.Thick
                disable={String(!comment.length)}
                onClick={handleSubmit}
              >
                Discuss
              </Btn.Thick>
            </Div>
          </Div>
        </Form.Form>

        <CommentsWrraper>
          {comments.data
            ? comments.data?.map((comment, index) => (
                <Comment
                  key={index}
                  profileImg={formatProfile(comment.user)}
                  date={formatTime(comment.comment.commentDate)}
                  text={comment.comment.text}
                />
              ))
            : null}
        </CommentsWrraper>
      </Div>
    </>
  );
}
