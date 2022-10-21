import React, { useState, useEffect } from "react";
import { UserCtx } from "../../../Ctx/User";
import { H3, A, Span, Label, Gray, B } from "../../../parts/txt";
import { Thick, Custom } from "../../../parts/button";
import { Form, Input } from "../../../parts/form";
import { Div } from "../../../parts/general";
import AuthError from "../../auth/parts/error";
import styles from "./style.module.scss";
import { AiFillLock } from "react-icons/ai";
import If from "../../../components/renderIf";
import { APIsubscribe, APIcheckCoupon } from "../../../API/all/pricing";
import { write } from "../../../API/useful_functions";
import { useMutation } from "react-query";
import {
  is_invalid_card_number,
  is_invalid_cvc,
  is_invalid_expiry,
  generate_errors,
} from "../../../validators";
import writeDataLayer from "../../../components/dataLayer";

/**
 * @param {string} plan
 * @param {string} price
 * @param {string} total
 * @param {string} currency_symbol
 */

export default function PymntForm({
  plan,
  total: sum,
  price,
  currency_symbol,
}) {
  const { user } = React.useContext(UserCtx);

  const [total, setTotal] = useState(sum);

  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [paymentErrors, setPaymentErrors] = useState([]);

  const [coupon, setCoupon] = useState({
    code: "",
    isValid: false,
    show: false,
    isWriting: true,
  });

  const checkCoupon = useMutation(() => APIcheckCoupon(coupon.code, sum), {
    onSuccess: (data) => {
      if (data.result) {
        setCoupon({
          ...coupon,
          isValid: true,
          isWriting: false,
        });
        setTotal(data.sum);
      } else {
        failCoupon(false);
      }
    },
    onError: () => {
      failCoupon(false);
    },
  });

  const subscribe = useMutation(APIsubscribe, {
    onSuccess: (data) => {
      if (data.data.result === "done") {
        writeDataLayer({
          event: "free_trial_started",
          userId: user.userId,
          plan,
          partner: "no",
          flow_type: "free_trial",
        });

        return (window.location.href = "/payment/success");
      } else {
        setPaymentErrors(["Payment failed"]);
      }
    },
  });

  useEffect(() => {
    setTotal(sum);

    if (coupon.isValid) {
      checkCoupon.mutate();
    }
  }, [sum]);

  const plans = ["Monthly", "Quarterly", "Yearly"];
  const submit = () => {
    const invalidCardNumber = is_invalid_card_number(cardNumber);
    const invalidCardExpiry = is_invalid_expiry(cardExpiry);
    const invalidCardCvv = is_invalid_cvc(cardCvv);

    const newErrors = generate_errors(
      invalidCardCvv,
      invalidCardExpiry,
      invalidCardNumber
    );

    if (newErrors.length) {
      setPaymentErrors(newErrors);
      return;
    } else {
      setPaymentErrors([]);
    }

    const doc = {
      subscriptionType: plans.indexOf(plan),
      cardDetails: {
        number: cardNumber.replaceAll(" ", ""),
        expYear: cardExpiry.split("/")[1],
        expMonth: cardExpiry.split("/")[0],
        cvc: cardCvv,
      },
      couponName: coupon.name,
    };

    subscribe.mutate(doc);
  };

  const failCoupon = (isWriting = true) => {
    setCoupon((coupon) => ({
      ...coupon,
      isValid: false,
      isWriting,
    }));
    setTotal(sum);
  };
  const writeCoupon = (code) => {
    setCoupon((coupon) => ({
      ...coupon,
      code,
    }));
    failCoupon();
  };
  const toggleCoupon = () => {
    setCoupon((coupon) => ({ ...coupon, show: !coupon.show }));
    failCoupon();
  };

  useEffect(() => {
    if (paymentErrors.length) {
      setPaymentErrors([]);
    }
  }, [cardCvv, cardExpiry, cardNumber]);

  const handleCcNumber = (e) => {
    const { value } = e.target;

    if (value.length > 16 + 3 && value.length > cardNumber.length) return;

    setCardNumber(putSpaces(value));
  };

  const putSpaces = (value) =>
    String(value)
      .replaceAll(" ", "")
      .split("")
      .map((v, i) => (i && i % 4 === 0 ? " " + v : v))
      .join("");

  const handleCcExpiry = (e) => {
    const { value } = e.target;

    if (value.length > 6 + 1 && value.length > cardExpiry.length) return;

    setCardExpiry(pushSlash(value));
  };

  const pushSlash = (value) =>
    String(value)
      .replaceAll("/", "")
      .split("")
      .map((v, i) => (i === 2 ? "/" + v : v))
      .join("");

  const handleCcCvv = (e) => {
    const { value } = e.target;

    if (value.length > 4 && value.length > cardCvv.length) return;

    setCardCvv(value);
  };

  return (
    <Div className={styles.Container}>
      <Div className={styles.Forms}>
        <Div className="flex justify-content-between">
          <H3>{plan}</H3>
          <Span>
            {price}
            {currency_symbol}
          </Span>
        </Div>
        <hr />
        <If cond={!coupon.show}>
          <Gray>
            Have a promo code?{" "}
            <A className="link-primary" onClick={toggleCoupon}>
              Click here
            </A>
          </Gray>
        </If>
        <If cond={coupon.show}>
          <Div>
            <Form className={styles.coupon}>
              <Input
                className={
                  coupon.isWriting || !coupon.code.length
                    ? ""
                    : coupon.isValid
                    ? "is-valid"
                    : "is-invalid"
                }
                placeholder="ENTER COUPON"
                value={coupon.code}
                onChange={(e) => writeCoupon(e.target.value)}
              />
              <Custom onClick={checkCoupon.mutate}>Apply</Custom>
            </Form>
            <A disabled className="fs-sm fw-medium" onClick={toggleCoupon}>
              REMOVE
            </A>
          </Div>
        </If>
        <hr />
        <If cond={paymentErrors.length}>
          <AuthError errors={paymentErrors}></AuthError>
          <br />
        </If>
        <Form>
          <Label block htmlFor="cc_number">
            <Gray className="fs-sm">CARD NUMBER</Gray>
            <Input
              placeholder="XXXX XXXX XXXX XXXX"
              id="cc_number"
              name="cc_number"
              value={cardNumber}
              onChange={handleCcNumber}
            />
          </Label>
          <br />
          <br />
          <Div className="flex gap-4">
            <Label block htmlFor="cc_date">
              <Gray className="fs-sm">Expiry Date</Gray>
              <Input
                placeholder="MM/YYYY"
                id="cc_date"
                name="cc_date"
                value={cardExpiry}
                onChange={handleCcExpiry}
              />
            </Label>

            <Label block htmlFor="cc_cvc">
              <Gray className="fs-sm">CVV / CVC</Gray>
              <Input
                type="number"
                placeholder="3 OR 4 DIGIT NUMBER"
                id="cc_cvc"
                name="cc_cvc"
                value={cardCvv}
                onChange={handleCcCvv}
              />
            </Label>
          </Div>
          <hr />
          <Div className="flex justify-content-between">
            <Gray>Total</Gray>
            <Span>
              <If cond={coupon.isValid && total !== sum}>
                <s className="text-gray fs-cmnt-s mx-2">
                  {write(sum, {
                    max: 2,
                    maxAfter: ".",
                  })}
                  {currency_symbol}
                </s>
              </If>
              {write(total, {
                max: 2,
                maxAfter: ".",
              })}
              {currency_symbol}
            </Span>
          </Div>
          <Thick
            className="mt-3"
            block
            onClick={submit}
            loading={subscribe.isLoading}
          >
            Start my free trial
          </Thick>

          <Div className="text-center mt-3" block>
            <Span className="fs-sm text-secondary">Money-back Guarantee</Span>
          </Div>
        </Form>
      </Div>
      <Div className="text-center fs-sm mt-3" block>
        <Span className="text-success">
          <AiFillLock /> Secure credit and payment
        </Span>
        <br />
        <Span>
          By completing this purchase, you agree to our{" "}
          <A to="/terms-of-service">Terms of Service</A>
        </Span>
      </Div>
    </Div>
  );
}
