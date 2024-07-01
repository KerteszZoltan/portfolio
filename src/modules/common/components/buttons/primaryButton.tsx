"use client";

import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./primaryButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function MoreInformation() {
  function onClickHandl() {
    console.log("teszt");
  }

  return (
    <button className="primary-button" onClick={onClickHandl}>
      Learn More
      <div className="arrow">
        <FontAwesomeIcon
          style={{ width: "18px", height: "18px" }}
          icon={faPlay}
        />
      </div>
    </button>
  );
}
