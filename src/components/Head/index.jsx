import { Helmet } from "react-helmet";

export const siteMap = {
  "/": {
    title: "Home",
    description: "",
  },
  "/sign-up": {
    title: "Sign Up",
    description: "",
  },
  "/user/login": {
    title: "Login",
    description: "",
  },
  "/user/settings": {
    title: "Settings",
    description: "",
  },
  "/pricing": {
    title: "Pricing",
    description: "",
  },
  "/subscription/{id}": {
    title: "Cart",
    description: "",
  },
  "/payment/success": {
    title: "Success",
    description: "",
  },
  "/contact-us": {
    title: "Contact Us",
    description: "",
  },
  "/about-us": {
    title: "About Us",
    description: "",
  },
  "/privacy-notice": {
    title: "Privacy Notice",
    description: "",
  },
  "/cookies-policy": {
    title: "Cookies Policy",
    description: "",
  },
  "/terms-of-service": {
    title: "Terms Of Service",
    description: "",
  },
  "/faq": {
    title: "Frequently asked questions",
    description: "",
  },
  "/onboard": {
    title: "Onboard",
    description: "",
  },
  "/{academicInstitution}/{program}": {
    title: "{academicInstitution}",
    description: "",
  },
  "/mycourses": {
    title: "My Courses",
    description: "",
  },
  "/university/{uni}": {
    title: "{uni}",
    url_name: "university",
    description: "",
  },
  "/video_page": {
    title: "video_page",
    description: "",
  },
};

const FIXED_PROPS = ["slug", "prefix"];
const genTitle = (props) => {
  const { slug, prefix = "Proprep - " } = props;
  let { title } = siteMap[slug] || "";

  for (const key in props) {
    if (!FIXED_PROPS.includes(key)) {
      title = title.replaceAll(`{${key}}`, props[key] || "");
    }
  }

  if (!title) {
    return "Proprep";
  }

  return prefix + title;
};

const Head = (props) => (
  <Helmet>
    <title>{genTitle(props)}</title>
    <meta
      rel="description"
      content={siteMap[props.slug]?.description || "description"}
    />
    <link rel="canonical" href={window.location.href} />
    {siteMap[props.slug]?.meta}
  </Helmet>
);

export default Head;
