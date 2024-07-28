"use client";

import "./primaryBackButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  onClick: () => void;
  text: string;
  icon: IconProp;
};

const PrimaryBackButton = ({ onClick, text, icon }: ButtonProps) => {
  return (
    <button className="primary-back-button" onClick={onClick}>
      <p className="title">{text}</p>
      <div className="icon">
        <FontAwesomeIcon
          style={{ width: "18px", height: "18px" }}
          icon={icon}
        />
      </div>
    </button>
  );
};

export default PrimaryBackButton;
