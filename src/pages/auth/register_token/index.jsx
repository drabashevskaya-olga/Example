import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Loader from "../../../components/loader";

export default function RegisterToken() {
  let { token, platform } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/user/login");

    let method = "signup";

    if (location.pathname.includes("/sign-in")) method = "logged_in";

    localStorage.setItem("token", token);
    localStorage.setItem(method, platform);
    window.location.href = "/";
  }, []);

  return (
    <div className="page-50 flex">
      <Loader size="50px" color="primary" />
    </div>
  );
}
