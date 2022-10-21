import React from "react";
import { useRef } from "react";
import SidePopup from "../sidePopup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Div } from "../../parts/general";
import { Button } from "../../parts/button";
import { P, A, Span } from "../../parts/txt";
import styles from "./style.module.scss";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsPinterest, BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";

export default function ReferToAFriend(props) {
  const progressNumber = 1;
  const countRemained = 3 - progressNumber;

  const textInputRef = useRef(null);

  const referalLink = "https://www.proprep.uk/info/examseason2?grsf=68ym8z";

  const copyToClipboard = (e) => {
    textInputRef.current.select();
    document.execCommand("copy");
    e.target.focus();
  };

  const shareLinks = [
    {
      className: `${styles.shareLinkEmail}`,
      href: `mailto:?body=Hey friend!Use my unique link to sign up: ${referalLink}`,
      title: "Email",
      icon: <AiOutlineMail />,
    },
    {
      className: `${styles.shareLinkFacebook}`,
      href: `https://www.facebook.com/sharer/sharer.php?u=${referalLink}`,
      title: "Share",
      icon: <AiFillFacebook />,
    },
    {
      className: `${styles.shareLinkTwitter}`,
      href: `https://twitter.com/intent/tweet?url=${referalLink}`,
      title: "Share",
      icon: <AiOutlineTwitter />,
    },
    {
      className: `${styles.shareLinkPinterest}`,
      href: `https://pinterest.com/pin/create/button/?url=${referalLink}`,
      title: "Pin",
      icon: <BsPinterest />,
    },
  ];

  return (
    <SidePopup {...props} width="40%" tablet_width="50%" mobile_width="100%">
      <Div className={styles.progressStatus}>
        {progressNumber} referrals made
      </Div>
      <h3 className="text-center fs-ml fw-medium pt-5 pb-3">
        Refer friends to get one month free!
      </h3>
      <p className="text-center mx-5 px-4">
        Share your unique link with 3 friends, and once they’ve signed up you’ll
        get one free month of full Proprep access.
      </p>
      <Tabs
        defaultActiveKey="share"
        id="uncontrolled-tab-example"
        className={`my-5 ${styles.TabsList}`}
        fill
      >
        <Tab eventKey="share" title="SHARE">
          <p className="fs-m fw-bold text-center">
            Share your unique referral link
          </p>
          <Div className="d-flex w-100">
            <input
              ref={textInputRef}
              value={referalLink}
              readOnly
              style={{ width: "70%" }}
              className={`${styles.inputReferal} p-3 border-0`}
            />
            <Button
              onClick={copyToClipboard}
              style={{ width: "30%" }}
              className="p-3 border-0"
            >
              Copy Link
            </Button>
          </Div>
          <Div className={`d-flex my-3 ${styles.shareLinks}`}>
            {shareLinks.map((item, index) => (
              <A
                key={index}
                className={item.className}
                href={item.href}
                target="_blank"
                no-decoration
              >
                {item.icon} {item.title}
              </A>
            ))}
          </Div>
        </Tab>
        <Tab eventKey="rewards" title="REWARDS">
          <Div className={styles.Rewards}>
            <P>Refer 3 people and get month free</P>
            <Span className={styles.RewardsInfo}>
              {countRemained} referrals required
            </Span>
            {progressNumber >= 1 ? (
              <BsCheckCircleFill className={styles.Active} />
            ) : (
              <BsCheckCircle />
            )}
            {progressNumber >= 2 ? (
              <BsCheckCircleFill className={styles.Active} />
            ) : (
              <BsCheckCircle />
            )}
            {progressNumber >= 3 ? (
              <BsCheckCircleFill className={styles.Active} />
            ) : (
              <BsCheckCircle />
            )}
          </Div>
        </Tab>
      </Tabs>
    </SidePopup>
  );
}
