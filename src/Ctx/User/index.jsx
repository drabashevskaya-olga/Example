import { createContext, useState, useEffect } from "react";
import { APIGetMe } from "../../API/all/user";
import { useQuery } from "react-query";
import writeDataLayer from "../../components/dataLayer";
import { useMutation } from "react-query";
import { APIupdateAcademy } from "../../API/all/user";

const UserCtx = createContext();

const getDevice = () => {
  const innerWidth = window.innerWidth;

  if (innerWidth < 768) {
    return "mobile";
  } else if (innerWidth < 1024) {
    return "tablet";
  } else return "desktop";
};

const useDevice = () => {
  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDevice(getDevice());
    });
  }, []);

  return device;
};

const formatUser = (user) => {
  if (user.isLoading || user.isFetching) {
    return { loading: true, ...user.data };
  }
  if (user.data) {
    if (user.data.isSubscription || user.data.isTrial) {
      return {
        type: "active",
        ...user.data,
      };
    } else {
      return {
        type: "user",
        ...user.data,
      };
    }
  }
  return { type: "guest" };
};

const UserProvider = (props) => {
  const [config, _setConfig] = useState({
    device: getDevice(),
  });

  const user = useQuery("User_GetMe", APIGetMe, {
    retry: false,
    keepPreviousData: true,
  });

  const pickUni = useMutation(APIupdateAcademy, {
    onSuccess: () => localStorage.removeItem("partner"),
  });

  useEffect(() => {
    const signup = localStorage.getItem("signup");
    const logged_in = localStorage.getItem("logged_in");
    const partner = localStorage.getItem("partner");

    if (logged_in && user.data) {
      writeDataLayer({
        event: "log_in_user",
        method: logged_in,
        userId: user.data.userId,
        subscription_type: user.data.isSubscription
          ? "subscriber"
          : user.data.isTrial
          ? "trial"
          : "free account",
        subscription_status: user.data.isSubscription
          ? "subscriber"
          : "free account",
        partner: partner || "no",
      });
      localStorage.removeItem("logged_in");
    }
    if (signup && user.data) {
      writeDataLayer({
        event: "profile_created",
        method: signup,
        userId: user.data.userId,
        couponUsed: "",
        schoolName: "",
        partner: partner || "no",
        flow_type: "signup",
      });
      localStorage.removeItem("signup");
    }

    if (!user.data?.isAcademyId && partner) {
      pickUni.mutate({ partner });
    }
  }, [user.data]);

  return (
    <UserCtx.Provider
      value={{
        user: formatUser(user),
        config,
        useDevice,
      }}
    >
      {props.children}
    </UserCtx.Provider>
  );
};

export { UserCtx, UserProvider };
