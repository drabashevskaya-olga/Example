import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { Div } from "../../../../parts/general";
import * as Txt from "../../../../parts/txt";
import * as Btn from "../../../../parts/button";
import { LocaleCtx } from "../../../../Ctx/Locale";
import { UserCtx } from "../../../../Ctx/User";
import Popup from "../../../../components/popup";
import { Link } from "react-router-dom";

export default function PrCards() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const { locale } = React.useContext(LocaleCtx);
  const { user } = React.useContext(UserCtx);

  const goTo = (index) => {
    if (user.isSubscription) {
      return setShowPopup(true);
    }
    navigate("/subscription/" + index);
  };

  return (
    <>
      <Popup show={showPopup} onHide={() => setShowPopup(false)} centered>
        <div className={styles.Content}>
          If you want to change your plan, please get in touch with us at{" "}
          <Link
            to=""
            onClick={() => (window.location = "mailto:support@proprep.com")}
          >
            support@proprep.com
          </Link>
        </div>
      </Popup>
      <Div className="page bg-light pt-5" id="cards">
        <Div className="flex-col">
          <Txt.H2>Choose your plan</Txt.H2>

          <Div className={styles.Tags}>
            <ul>
              <li>
                <Txt.Span>14-day free trial with all plans</Txt.Span>
              </li>
              <li>
                <Txt.Span>Cancel anytime</Txt.Span>
              </li>
              <li>
                <Txt.Span>
                  We’ll remind you 3 days before your trial ends
                </Txt.Span>
              </li>
            </ul>
          </Div>
        </Div>
        <Div className={styles.Container}>
          <Div className={styles.Card}>
            <Div className={styles.Card__title} block>
              <Txt.H2>{locale.pricing.monthly.name}</Txt.H2>
            </Div>
            <Div className={styles.Card__body}>
              <Txt.B>
                {locale.currency_symbol}
                {locale.pricing.monthly.price}
              </Txt.B>
              <Txt.P>
                1 month's access Billed {locale.currency_symbol}
                {locale.pricing.monthly.price} (monthly)
              </Txt.P>
              <Btn.Outlined className="py-3 px-5" glow onClick={() => goTo(1)}>
                Choose this plan
              </Btn.Outlined>
            </Div>
          </Div>
          <Div className={styles.Card}>
            <Div className={styles.Card__title} block>
              <Txt.H2>{locale.pricing.quarterly.name}</Txt.H2>
            </Div>
            <Div className={styles.Card__body}>
              <Txt.B>
                {locale.currency_symbol}
                {locale.pricing.quarterly.price}
              </Txt.B>
              <Txt.P>
                3 month's access Billed {locale.currency_symbol}
                {locale.pricing.quarterly.price * 3} (every 3 months)
              </Txt.P>
              <Btn.Button className="py-3 px-5" onClick={() => goTo(0)} glow>
                Choose this plan
              </Btn.Button>
              <Txt.Gray>
                Save {locale.currency_symbol}
                {locale.pricing.monthly.price * 3 -
                  locale.pricing.quarterly.price * 3}{" "}
                of the monthly plan
              </Txt.Gray>
            </Div>
          </Div>
          <Div className={styles.Card}>
            <Div className={styles.Card__title} block>
              <Txt.H2>{locale.pricing.yearly.name}</Txt.H2>
            </Div>
            <Div className={styles.Card__body}>
              <Txt.B>
                {locale.currency_symbol}
                {locale.pricing.yearly.price}
              </Txt.B>
              <Txt.P>
                12 months' access Billed {locale.currency_symbol}
                {locale.pricing.yearly.price * 12} (every 12 months)
              </Txt.P>
              <Btn.Outlined className="py-3 px-5" glow onClick={() => goTo(2)}>
                Choose this plan
              </Btn.Outlined>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
}
