"use client";

import "./primaryButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  onClick: () => void;
  text: string;
  icon: IconProp;
  href: string;
};

const PrimaryLink = ({ onClick, text, icon, href }: ButtonProps) => {
  return (
    <a className="primary-button" href={href} onClick={onClick} download>
      <p className="title">{text}</p>
      <div className="arrow">
        <FontAwesomeIcon
          style={{ width: "18px", height: "18px" }}
          icon={icon}
        />
      </div>
    </a>
  );
};

export default PrimaryLink;
