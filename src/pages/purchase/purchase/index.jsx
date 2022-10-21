import React, { useState, useEffect } from "react";
import { Div } from "../../../parts/general";
import { H1, B } from "../../../parts/txt";
import { Select } from "../../../parts/form";
import PymntForm from "../form";
import styles from "./style.module.scss";
import { LocaleCtx } from "../../../Ctx/Locale";
import { isBetween } from "../../../validators";

export default function PurchaseLayout({ planId }) {
  const { locale } = React.useContext(LocaleCtx);
  const [plan, setPlan] = useState("");
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const [twoWeeksFromNow, setTwoWeeksFromNow] = useState("");

  useEffect(() => {
    if (planId && isBetween(0, planId, 2)) {
      setPlan(locale.pricing[["quarterly", "monthly", "yearly"][planId]].name);
    } else setPlan(locale.pricing.quarterly.name);
  }, []);

  useEffect(() => {
    handleTotal();
  }, [plan]);

  const handleTotal = () => {
    if (!plan) return;
    switch (plan) {
      case locale.pricing.monthly.name:
        setPrice(locale.pricing.monthly.price);
        setTotal(locale.pricing.monthly.price);
        return;
      case locale.pricing.yearly.name:
        setPrice(locale.pricing.yearly.price);
        setTotal(locale.pricing.yearly.price * 12);
        return;
      case locale.pricing.quarterly.name:
        setPrice(locale.pricing.quarterly.price);
        setTotal(locale.pricing.quarterly.price * 3);
        return;
      default:
        return;
    }
  };

  useEffect(() => {
    const now = new Date();
    setTwoWeeksFromNow(
      new Date(now.getTime() + 1000 * 60 * 60 * 24 * 14).toLocaleDateString(
        "en-us",
        {
          year: "numeric",
          day: "numeric",
          month: "short",
        }
      )
    );
  }, []);

  return (
    <>
      <Div className="page bg-light py-5 flex-col gap-5 border">
        <H1 className="text-center">{locale.pricing.headline}</H1>
        <Div className={styles.Content} block>
          <PymntForm
            plan={plan}
            total={total}
            price={price}
            currency_symbol={locale.currency_symbol}
          />
          <Div className={styles.Details}>
            <Div className="flex justify-content-between">
              <Select onChange={(e) => setPlan(e.target.value)} value={plan}>
                <option>{locale.pricing.quarterly.name}</option>
                <option>{locale.pricing.monthly.name}</option>
                <option>{locale.pricing.yearly.name}</option>
              </Select>
              <B>
                {total}
                {locale.currency_symbol}
              </B>
            </Div>
            <hr />
            <ul>
              <li>Free 14 days trial, cancel anytime</li>
              <li>First payment on {twoWeeksFromNow}</li>
              <li>We’ll remind you before your trial ends</li>
            </ul>
          </Div>
        </Div>
      </Div>
    </>
  );
}
