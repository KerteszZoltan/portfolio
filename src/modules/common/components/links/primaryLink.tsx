"use client";

import "./primaryLink.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  onClick: () => void;
  text: string;
  icon: IconProp;
  href: string;
  download?: boolean;
};

const PrimaryLink = ({
  onClick,
  text,
  icon,
  href,
  download = false,
}: ButtonProps) => {
  return (
    <a
      className="primary-button"
      href={href}
      onClick={onClick}
      download={download}
      target="_blank"
    >
      <p className="title">{text}</p>
      <div className="icon">
        <FontAwesomeIcon
          style={{ width: "18px", height: "18px" }}
          icon={icon}
        />
      </div>
    </a>
  );
};

export default PrimaryLink;
