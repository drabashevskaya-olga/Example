import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.svg";
import { useLocation } from "react-router-dom";
import LogoMobile from "../../assets/images/logo-mobile.svg";
import styles from "./style.module.scss";
import { A } from "../../parts/txt";
import { Div } from "../../parts/general";
import If from "../../components/renderIf";
import { useContext } from "react";
import { UserCtx } from "../../Ctx/User";

import * as GuestHeader from "./parts/guest";
import * as UserHeader from "./parts/user";
import * as ActiveUserHeader from "./parts/user_active";

export default function Header() {
  const { pathname } = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user, useDevice } = useContext(UserCtx);

  const device = useDevice();
  const dontShowHeaderPaths = ["/partner"];

  // close dropdowns on route change
  useEffect(() => {
    setShowHeader(
      !dontShowHeaderPaths.some((route) => pathname.includes(route))
    );

    setIsNavOpen(false);
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  if (!showHeader) return null;
  return (
    <Div className={styles.Header}>
      <Div className={styles.Wrraper}>
        <Div className={styles.Logo}>
          <If cond={device === "mobile"}>
            <Div
              className={styles.Hamburger}
              data-open={isNavOpen}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <div></div>
              <div></div>
              <div></div>
            </Div>
          </If>
          <A to="/">
            <img
              src={device === "mobile" ? LogoMobile : Logo}
              alt="proprep logo"
            />
          </A>
        </Div>
        <If cond={device !== "mobile"}>
          <Div className={styles.Links}>
            <If cond={user.type === "guest" || user.loading}>
              <GuestHeader.Links />
            </If>
            <If cond={user.type === "user"}>
              <UserHeader.Links />
            </If>
            <If cond={user.type === "active"}>
              <ActiveUserHeader.Links />
            </If>
          </Div>
        </If>
        <Div className={styles.Btns}>
          <If cond={device !== "mobile"}>
            <If cond={user.type === "guest" || user.loading}>
              <GuestHeader.Buttons />
            </If>
            <If cond={user.type === "user"}>
              <UserHeader.Buttons />
            </If>
            <If cond={user.type === "active"}>
              <ActiveUserHeader.Buttons />
            </If>
          </If>
          <If cond={device === "mobile"}>
            <If cond={user.type === "guest" || user.loading}>
              <GuestHeader.MobileButtons />
            </If>
            <If cond={user.type === "user"}>
              <UserHeader.MobileButtons />
            </If>
            <If cond={user.type === "active"}>
              <ActiveUserHeader.MobileButtons />
            </If>
          </If>
        </Div>
      </Div>
      <If cond={device === "mobile" && isNavOpen}>
        <Div className={styles.MobileLinks}>
          <If cond={user.type === "guest" || user.loading}>
            <GuestHeader.MobileLinks />
          </If>
          <If cond={user.type === "user"}>
            <UserHeader.MobileLinks />
          </If>
          <If cond={user.type === "active"}>
            <ActiveUserHeader.MobileLinks />
          </If>
        </Div>
      </If>
    </Div>
  );
}
