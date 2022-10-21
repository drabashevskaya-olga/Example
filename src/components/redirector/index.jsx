import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Redirector({ children, cond, redirect, no_return }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (cond) {
      if (no_return) {
        navigate(redirect);
        return;
      }
      navigate(redirect + "?return=" + location.pathname);
    }
  }, []);

  return children;
}
