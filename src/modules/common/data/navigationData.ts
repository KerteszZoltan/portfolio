import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink, faDownload, faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export type NavigationType = {
  title: string;
  introduction: string;
  description: string;
  buttonIcon: IconProp;
  logoIcon: IconProp;
  link: string;
};

export const contactData: NavigationType[] = [
  {
    title: "LinkedIn",
    introduction: "Check my LinkedIn profile",
    description: "Here can you check my LinkedIn profile",
    buttonIcon: faLink,
    logoIcon: faLinkedin,
    link: "https://github.com/KerteszZoltan?tab=repositories",
  },
  {
    title: "GitHub",
    introduction: "Check my repository",
    description: "Here can you check my portfolio and previous projects",
    buttonIcon: faLink,
    logoIcon: faGithub,
    link: "https://github.com/KerteszZoltan?tab=repositories",
  },
  {
    title: "CV",
    introduction: "Download my CV now!",
    description: "",
    buttonIcon: faDownload,
    logoIcon: faFile,
    link: "/assets/cv/english_cv.pdf",
  },
];
