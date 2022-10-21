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
    content: `At Proprep UK Ltd (“Proprep”, “we”, “us”, “our”), we care about your
    personal information, so we have prepared this Privacy Notice
    (“Notice”, “the Notice”, “this Notice”) to inform you of how we
    collect, use, store and share your information when you contact us,
    visit our website or use one of our services.`,
  },
  {
    tag: "p",
    content: `This Notice explains the following:`,
  },
  {
    content: [
      "what information we collect about you",
      "how we use the information we collect about you.",
      "when we may use your details to contact you.",
      "whether we will share your information with anyone else.",
      "ow long we will keep your information for.",
      "Subscribers to our newsletters or marketing lists.",
    ],
  },
  {
    content: `At Proprep we are committed to upholding the privacy rights of our
    users, customers and partners. This Notice is directed at but not
    limited to:`,
  },
  {
    content: [
      "Visitors and subscribers to our services or website.",
      "Users signing into our services or website.",
      "Subscribers to our newsletters or marketing lists.",
      `Natural persons contacting us through the contact or other forms
    available on the website or the
    <a href="mailto:info@proprep.uk">info@proprep.uk</a> 
    email address.`,
    ],
  },
  {
    content: `This Notice applies only to the actions of Proprep and users of our
    services or website. Our website may contain links to third-party
    websites; however, this Notice does not extend to any other service
    or website that can be accessed from ours, including but not limited
    to, any links we may provide to social media websites. We have no
    control over how your information is collected, stored or used by
    third-parties and would strongly advise you to check the Privacy
    Notice of every website you visit before submitting any personal
    information to them.
    <br />
    <br />
    By using or accessing our services or website, you agree to the
    terms of this Notice. We may at times update this Notice to reflect
    changes to our information practice, the most up to date version
    will always be available on our website.`,
  },
  {
    content: "2. Who are we?",
  },
  {
    content: `For the purpose of applicable Information Protection Laws, Proprep
    UK Ltd, is the “Information Controller” of your personal
    information.
    <br />
    <br />
    This means that Proprep determines the purposes for which, and the
    manner in which, your information is processed.
    <br />
    <br />
    If you have any questions or concerns regarding this Notice or the
    use of your information you can contact us at: 
    <a href="mailto:info@proprep.uk">info@proprep.uk</a>. To
    assist us in responding to any questions or concerns you may have at
    the earliest opportunity, you should include “Information
    Protection/Privacy” in the subject line of your email.`,
  },
  {
    content: "3. Information we collect.",
  },
  {
    content: `When you access, sign up for or use our website, any of our services, materials or online content, such as newsletters, downloadable documents or contact forms, we may collect personal information. We only collect information that we know we will genuinely use. The personal information we collect includes (a) information you provide to us; and (b) information we automatically collect or generate. We have set out below more details about these types of information:`,
  },
  {
    tag: "span",
    content: `<u>Information that you provide to us</u>`,
  },
  {
    content: [
      "contact details (such as your name, and e-mail address).",
      "demographic information (such as your age or age range and gender).",
      "online registration information (such as your password and other authentication information).",
      "payment and subscription information.",
      "information provided as part of online questionnaires (such as responses to customer satisfaction surveys or market research).",
      "your marketing preferences.",
    ],
  },
  {
    tag: "span",
    content: `<u>Information we automatically generate or collect</u>`,
  },
  {
    content: `As you use our service or website we may automatically generate and collect information about your engagement. This information may include:

    `,
  },
  {
    content: [
      "name and age (or predicted age range).",
      "information about your device, operating system, browser and IP address.",
      "unique identifiers associated with your device.",
      "details of web pages that you have visited.",
      "how long you spend on certain areas of our website together with the date and time of your visit / usage.",
      "personal information contained within user generated content (such as blogs and social media postings).",
      "social media username or ID and related login details.",
    ],
  },
  {
    content:
      "In addition, when you use our services or website, we may collect information using automated interaction such as cookies. For further information on our use of cookies please see our <a href=/cookie-policy>cookies policy.</a>",
  },
  {
    tag: "h2",
    content: "4. How do we use your personal information?",
  },
  {
    content:
      "We will use the information we collect for a number of purposes including the following:",
  },
  {
    content: [
      "to provide you with our services, materials or online content and to deal with your requests and enquiries (including the administration of your account) to provide you with information about our services, materials or online content.",
      "to serve you relevant, interest-based advertising related to our services.",
      "to analyse and improve the services offered on our website.",
      "to provide you with the most user-friendly navigation experience ensuring that content is presented in the most effective manner for you and for your computer and/or device.",
      "to carry out marketing analysis on our products, service and campaigns",
      "diagnose service or technology problems reported by our users or developers in connection with the use of our websites.",
    ],
  },
  {
    content:
      "Where we propose using your personal information for any other uses we will ensure that we notify you first. You will also be given the opportunity to withhold or withdraw your consent for the use of your personal information for purposes other than those listed above.",
  },
  {
    tag: "h2",
    content: "5. When we might use your information to contact you.",
  },
  {
    content: "We may use your information to contact you:",
  },
  {
    content: [
      "in relation to any service, material or online content you have signed up for or enquired about in order to ensure that we can deliver those to you.",
      "in relation to any correspondence we receive from you or any comment or complaint you make about our products or services.",
      "to invite you to participate in surveys about our services (participation is always voluntary); and",
      "for marketing purposes, or to promote new services, materials or online content where you have agreed to this.",
    ],
  },
  {
    tag: "h2",
    content: "6. Will we share your information with anyone else?",
  },
  {
    content: `We may share your personal information with any member of our group of companies – this includes any of our subsidiaries, our ultimate holding company and its subsidiaries.
    <br/><br/>
    We may disclose your personal information to suppliers or contractors who are appointed by us to assist in the provision of products and services to you, and to conduct market research which you have agreed to participate in, as well as to other third parties if:`,
  },
  {
    content: [
      `the third party has been appointed to perform certain functions on our behalf, for example; to provide technical services in relation to our website; or to provide technical or other services in relation to the processing of customer payments; or to provide technical or other services in relation to the processing of your personal information for mailing or marketing purposes for our services, to which you have consented and it needs access to your personal information to be able to properly perform the function;`,
      `we are under a duty to disclose or share your personal information in order to comply with any legal or regulatory obligation;`,
      `we become involved in any merger or acquisition or other transaction involving the sale of our business or assets, user information (including the personal information collected from you through your use of our website) may be included in the assets which are transferred to the new owner.`,
    ],
    list_style: "lower-alpha",
  },
  {
    content: `We use only carefully selected contractors to help us deliver our services to you and they are only allowed to use your personal information to deliver the services you have purchased, registered for or subscribed to. We do not allow them to use your personal information for their own purposes. We require all third parties to respect the security of your personal information and to treat it in accordance with the law.

    We will never share or sell your personal information to third-party organisations who do not have a legitimate interest or are focused on commercial gain.`,
  },
  {
    tag: "h2",
    content: "How long will we hold your information?",
  },
  {
    content: `To ensure we meet our legal obligations, we will only keep your personal information as long as necessary to fulfil the purposes we collected it for. We will only keep personal information for longer where there is a legal requirement for us to do so. In most circumstances, we will keep your information for the lifetime of your account with us. We also retain website usage information for analysis purposes. Usage information is generally retained for a shorter period of time, except when this information is used to strengthen the security or to improve the functionality of our service or website, or we are legally obligated to retain this information for longer time periods.
    <br/><br/>
    In some circumstances you can ask us to delete your information, this enables you to ask us to delete or remove personal information where there is no good reason for us to continue processing it. You can also ask us to correct inaccurate information. To do this you can contact us at <a href="mailto:info@proprep.uk">info@proprep.uk.</a>`,
  },
  {
    tag: "h2",
    content: `8. How to unsubscribe, withdraw consent or access your personal information.`,
  },
  {
    content: `You have the right to withdraw your consent, change your preferences, or opt out from hearing further from us. You can let us know by e-mailing us at <a href="mailto:info@proprep.uk">info@proprep.uk.</a>
    <br/><br/>
    You can also ask us to stop sending you marketing messages at any time by following the opt-out links on any marketing emails sent to you. If you withdraw your consent or opt-out, we may need to retain your email address to make sure we do not send messages to you.
    <br/><br/>
    You have a right to be able to access the information we hold about you. You can request a copy of the personal information we hold. We will require you to prove your identity with two pieces of approved identification. For this purpose, we will accept a photocopy of your passport and an original copy of a utility bill showing your current address.
    <br/><br/>
    We will always process your requests in line with the applicable information protection law.`,
  },
  {
    tag: "h2",
    content: `9. How do we store your information?
    `,
  },
  {
    content: `We will take all reasonably practicable steps to ensure the security of your information. We will endeavour to protect your personal information from unauthorised disclosure or access. It is important to remember though that no method of transmission over the internet is completely secure. Although we will do our best to protect your personal information, we cannot control the security of it in transit to us.
    <br/><br/>
    All of your personal information is stored in secure servers or cloud storage and we always limit access to employees, contractors and other third parties who have a legitimate interest. Some of our storage is based outside of the European Union in Israel and the United States of America, both of which have adequacy decisions from the European Commission. This means that both countries are determined as having adequate data protection processes and laws to protect your personal information.
    <br/><br/>
    Where we have given you (or where you have chosen) a password which enables you to access our services or website, you are responsible for keeping this password confidential. You will be responsible for controlling access to your account and for any activity under your account and password. You must not share your account or password with anyone.
    <br/><br/>
    Should we become aware of any information breach we will notify you and any relevant authorities.`,
  },
];

export default function PrivacyNotice() {
  return (
    <>
      <Head slug="/privacy-notice" />
      <div>
        <ContentHeadline>Privacy Notice</ContentHeadline>
        <div className="page py-4 d-flex flex-column gap-3">
          <ParagraphGenerator json={json} />
        </div>
      </div>
    </>
  );
}
