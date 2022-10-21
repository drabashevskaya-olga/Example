import React from "react";
import Head from "../../components/Head";
import ParagraphGenerator from "../../components/paragraph_generator";
import * as Txt from "../../parts/txt";
import ContentHeadline from "../../components/contentHeadline";

const json = [
  {
    content: "1. Introduction",
  },
  {
    content: `We use cookies to make our websites more user-friendly. Collecting cookies helps us understand you better and assists us in providing a more focused and streamlined user experience. Knowledge of your previous visits to our website allows us to enhance future visits.
    <br/><br/>
    Cookies are text files containing small amounts of information which are downloaded to your device when you visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to another website that recognises that cookie. Cookies are useful because they allow a website to recognise a user’s device and preferences. You can find more information about cookies at <a href='https://allaboutcookies.org'>www.allaboutcookies.org</a>.`,
  },
  {
    content: "2. Cookies that we use.",
  },
  {
    content: `The cookies used on the Proprep website have been categorised based on the categories found in the ICC UK Cookie guide. Our website uses the following categories of cookies:
    <br/><br/>
    <u>Strictly Necessary Cookies</u>  
    <br/><br/>
    These cookies are essential in order to enable you to move around the website and use its features. They don't gather any information about you that could be used for marketing or remembering where you've been on the internet
    <br/><br/>
    <u>Performance Cookies</u>
    <br/><br/>
    These cookies collect information about how you use a website, for instance, which pages you go to most often, and if you get error messages from web pages. These cookies don’t collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve the performance of the website, providing a better user experience.
    <br/><br/>
    <u>Functionality Cookies</u>
    <br/><br/>
    These cookies allow the website to remember choices you make and provide enhanced, more personal features. They may also be used to provide services you have asked for such as watching video or sharing information on social networks. The information these cookies collect may be anonymised and they cannot track your browsing activity on other websites.
    <br/><br/>
    <u>Third Party Cookies</u>
    <br/><br/>
    We sometimes embed content from social media and other third-party websites. These may include YouTube, Facebook, Twitter, Google+ and LinkedIn. Pages with this embedded content may present cookies from these websites. These third-party cookies may track your use of the Proprep website. Proprep does not control the dissemination of these cookies and will not block cookies from those websites. You should check the relevant third party website and their Cookie policy for more information about these.`,
  },
  {
    tag: "h2",
    content: "3. How do I control cookies?",
  },
  {
    content: `You may refuse to accept cookies from us by not opting into the use of cookies by us on the landing page of the website. Alternatively, you can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. You can also delete cookies by selecting the appropriate option in your browser settings. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.
    <br/><br/>
    If you would like to disable "third party" cookies you can turn them off by going to the third party's website and getting them to generate a one time "no thanks" cookie that will stop any further cookies being written to your machine.`,
  },
  {
    tag: "h2",
    content: `4. What happens if I change my device?`,
  },
  {
    content: `If you use a different device, computer profile or browser you will have to tell us your preferences again.`,
  },
  {
    content: "5. Google Analytics",
  },
  {
    content: `We use a tool called Google Analytics to collect information about the use of this site. Google Analytics collects information such as how often users visit this site, what pages they visit when they do so, and what other sites they used prior to coming to this site. We use the information we get from Google Analytics to improve this site and to serve you relevant, interest-based advertising related to our services. Google Analytics collects only the IP address assigned to you on the date you visit this site, rather than your name or other identifying information. We do not combine the information collected through the use of Google Analytics with personally identifiable information.

<br/><br/>
    Although Google Analytics plants a permanent cookie on your web browser to identify you as a unique user the next time you visit this site, the cookie cannot be used by anyone but Google. Google’s ability to use and share information collected by Google Analytics about your visits to this site is restricted by the Google Analytics Terms of Service and the Google privacy notice. You can prevent Google Analytics from recognising you on return visits to this site by disabling cookies on your browser or opting out from Google Analytics.`,
  },
  {
    content: `6. Flash Cookies`,
  },
  {
    content: `We sometimes use Adobe Flash Player to deliver video content and other services. Local-Shared Objects or Flash Cookies play a part in providing features that let you start looking at a videos where you stopped previously and saved preferences. They are stored on your computer in the same way as other cookies, but you can't manage them with your browser in the same way.
    <br/><br/>
    If you want to delete or disable Flash cookies you can find out how on the Adobe website. But if you disable these cookies it may affect the features available to you on Flash-based applications like some video.`,
  },
];

export default function CookiePolicy() {
  return (
    <>
      <Head slug="/cookies-policy" />
      <div>
        <ContentHeadline>Cookies Policy</ContentHeadline>
        <div className="page py-4 d-flex flex-column gap-3">
          <ParagraphGenerator json={json} />
        </div>
      </div>
    </>
  );
}
