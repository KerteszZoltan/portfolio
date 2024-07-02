"use client";

import "./primaryButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  onClick: () => void;
  text: string;
  icon: IconProp;
};

const PrimaryButton = ({ onClick, text, icon }: ButtonProps) => {
  return (
    <a className="primary-button" onClick={onClick}>
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

export default PrimaryButton;
