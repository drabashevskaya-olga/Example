import React from "react";

import { UserCtx } from "../../../../Ctx/User";

import { H2, H3, P, A } from "../../../../parts/txt";
import { Button } from "../../../../parts/button";
import { BasicCard, BasicCardWrraper } from "../../../../components/basicCard";

import SignUpImg from "../../../../assets/refferalProgram/sign-up.png";
import ShareImg from "../../../../assets/refferalProgram/share.png";
import RewardImg from "../../../../assets/refferalProgram/reward.png";
import If from "../../../../components/renderIf";

export default function RefferalProgram() {
  const { user } = React.useContext(UserCtx);
  return (
    <div className="page bg-light py-5 flex-col gap-3">
      <H2 className="h1 text-center mb-5">Proprep's referral program</H2>
      <BasicCardWrraper>
        <BasicCard>
          <img loading="lazy" src={SignUpImg} alt="proprep SignUpImg" />
          <H3>Sign up</H3>
          <P>
            Sign up now - the first 14 days are on us! Or log in to your
            existing Proprep account.
          </P>
        </BasicCard>
        <BasicCard>
          <img loading="lazy" src={ShareImg} alt="proprep ShareImg" />
          <H3>Share</H3>
          <P>Share your referral link with all your friends</P>
        </BasicCard>
        <BasicCard>
          <img loading="lazy" src={RewardImg} alt="proprep RewardImg" />
          <H3>Get rewarded</H3>
          <P>
            For every 3 users who sign up for a Proprep account using your link,
            you’ll get 1 month free!
          </P>
        </BasicCard>
      </BasicCardWrraper>
      <If cond={user.type === "guest" || user.loading}>
        <Button no-decoration to="/sign-up" className="my-3">
          Sign up
        </Button>
      </If>
    </div>
  );
}
