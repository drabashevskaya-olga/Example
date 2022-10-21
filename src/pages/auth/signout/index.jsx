import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import { APIlogout } from "../../../API/all/user";
import { useMutation } from "react-query";
import Loader from "../../../components/loader";

export default function Signout() {
  const { token } = useParams();

  // todo : this doesnt work
  // const logout = useMutation(APIlogout, {
  //   onSuccess: () => {
  //     localStorage.removeItem("token");
  //   },
  //   onSettled: () => (window.location.href = "/"),
  // });

  useLayoutEffect(() => {
    if (token === localStorage.getItem("token")) {
      localStorage.removeItem("token");
      // logout.mutate();
    }
    window.location.href = "/";
  }, []);

  return (
    <div className="page-50 flex">
      <Loader size="50px" color="primary" />
    </div>
  );
}
