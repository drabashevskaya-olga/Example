import React, { useState, useEffect } from "react";
import DropdownLink from "../dropdown_link";
import { UserCtx } from "../../../../Ctx/User";
import styles from "../../style.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { write } from "../../../../API/useful_functions";

export default function ProfileLink() {
  const { user } = React.useContext(UserCtx);
  const token = localStorage.getItem("token");

  const [links, setLinks] = useState([
    { label: "Pricing", to: "/pricing" },
    { label: "Refer a friend", to: "/#refer-to-a-friend" },
    { label: "Settings", to: "/user/settings" },
    { label: "Sign out", to: `signout/${token}` },
  ]);

  useEffect(() => {
    if (user.role === "admin") {
      setLinks([
        { label: "Pricing", to: "/pricing" },
        { label: "Refer a friend", to: "/#refer-to-a-friend" },
        { label: "Admin Panel", href: "https://stage.proprep.com/admin" },
        { label: "Settings", to: "/user/settings" },
        { label: "Sign out", to: `signout/${token}` },
      ]);
    }
  }, [user]);

  return (
    <DropdownLink list={links} className={styles.left}>
      <div className={styles.Profile}>
        <div className={styles.Img}>
          {write(user.firstName)[0]}
          {write(user.lastName)[0]}
        </div>
        <IoIosArrowDown />
      </div>
    </DropdownLink>
  );
}
