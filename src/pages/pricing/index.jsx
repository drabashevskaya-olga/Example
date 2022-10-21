import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserCtx } from "../../Ctx/User";
import If from "../../components/renderIf";

import PrcHero from "./parts/PrcHero";
import PrCards from "./parts/PrCards";
import Head from "../../components/Head";
import WhatWeOffer from "./parts/whatWeOffer";
import RecommPage from "../home/parts/recomm";
import PrcMsgs from "./parts/PrcMsgs";
import FqCmp from "../faq/FqCmp";
import JoinUs from "../home/parts/join_us";
import PurchaseLayout from "../purchase/purchase";

import { scrollToElement } from "../../parts/functions";

export default function Pricing() {
  const { hash } = useLocation();
  const { user } = React.useContext(UserCtx);

  useEffect(() => {
    if (!user.loading && hash === "#cards") {
      scrollToElement(hash, 75);
    }
  }, [user, hash]);

  return (
    <>
      <Head slug={"/pricing"} />
      <If cond={user.type === "guest" || user.type === "user"}>
        <PrcHero />
      </If>
      <If cond={user.type === "user"}>
        <PrcMsgs />
      </If>
      <PrCards />
      <If cond={user.type === "guest" || user.type === "active"}>
        <WhatWeOffer />
      </If>
      <If cond={user.type === "user"}>
        <PurchaseLayout />
      </If>
      <If cond={user.type === "guest" || user.type === "active"}>
        <RecommPage />
      </If>
      <FqCmp />
      <If cond={user.type === "user"}>
        <JoinUs />
      </If>
    </>
  );
}
