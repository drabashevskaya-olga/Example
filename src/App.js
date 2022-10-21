import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/_init.scss";
import Navigator from "./navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import If from "./components/renderIf";
import CookieConsentPopup from "./components/cookiesPopup";
import { UserCtx } from "./Ctx/User";
import { LocaleCtx } from "./Ctx/Locale";

function App() {
  const [showCookiePopup, setShowCookiePopup] = useState(false); // waiting, show, hide
  const { user } = useContext(UserCtx);
  const locale = useContext(LocaleCtx);

  useEffect(() => {
    setTimeout(() => setShowCookiePopup(true), 3000);
  }, []);

  useEffect(() => {
    handleLanguage();
  }, [user]);

  const handleLanguage = () => {
    const preferedLanguage = localStorage.getItem("language");

    if (
      user.type === "guest" &&
      (preferedLanguage === "en-us" || preferedLanguage === "en-uk")
    ) {
      locale.setLanguage(preferedLanguage);
      return;
    }

    if (user.continentCode === "NA") {
      locale.setLanguage("en-us");
    } else if (user.continentCode === "EU") {
      locale.setLanguage("en-uk");
    }
  };

  return (
    <Router>
      <Header />
      <Navigator />
      <Footer />

      {/* show cookie popup if the user is a guest and he hasnt agreed yet (in this current session) */}
      <If cond={showCookiePopup && user?.type === "guest"}>
        <CookieConsentPopup onAccept={() => setShowCookiePopup(false)} />
      </If>
    </Router>
  );
}

export default App;
