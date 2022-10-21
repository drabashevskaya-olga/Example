import { POST, GET } from "../../";

export const APIsubscribe = (body) =>
  POST("/Subscription/StripeSubscribe", body);

export const APIcheckCoupon = (name, sum) =>
  GET("course/GetCoupon", { params: { name, sum } }).then(({ data }) => data);

export const APIunsubscribe = () =>
  GET("/Subscription/StripeUnsubscribe").then(({ data }) => data);
