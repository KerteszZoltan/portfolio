import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink, faDownload } from "@fortawesome/free-solid-svg-icons";

export type NavigationType = {
  title: string;
  introduction: string;
  description: string;
  icon: IconProp;
  logoUrl: string;
  link: string;
};

export const contactData: NavigationType[] = [
  {
    title: "LinkedIn",
    introduction: "Check my LinkedIn profile",
    description: "Here can you check my LinkedIn profile",
    icon: faLink,
    logoUrl: "/assets/images/linkedin-logo1.png",
    link: "https://github.com/KerteszZoltan?tab=repositories",
  },
  {
    title: "GitHub",
    introduction: "Check my repository",
    description: "Here can you check my portfolio and previous projects",
    icon: faLink,
    logoUrl: "/assets/images/github-logo5.png",
    link: "https://github.com/KerteszZoltan?tab=repositories",
  },
  {
    title: "CV",
    introduction: "Download my CV now!",
    description: "",
    icon: faDownload,
    logoUrl: "/assets/images/cv-logo.png",
    link: "https://github.com/KerteszZoltan?tab=repositories",
  },
];
