import { POST, GET } from "../../";

/**
 * @param  {object[]} data
 */

export const APILogin = (data) => POST("users/login", data);

export const APISignup = (data) => POST("/Users/Register", data);

export const APIGetMe = () => GET("users/getuserinfo").then((res) => res.data);

export const APIupdateAcademy = (data) =>
  POST("/Users/UpdateUserAcademicId", data);

export const APIupdateProfile = (newEmail, newName) =>
  POST("/Users/UpdateUserDetails", { newEmail, newName });

export const APIupdatePassword = (oldPassword, newPassword) =>
  POST("/Users/UpdateUserPassword", { oldPassword, newPassword });

export const APIlogout = () => POST("Users/Logout");
