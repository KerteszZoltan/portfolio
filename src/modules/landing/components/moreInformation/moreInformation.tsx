"use client";

import "./moreInformation.scss";

export default function MoreInformation() {
  function onClickHandl() {
    console.log("teszt");
  }

  return (
    <div className="moreInformation-container">
      <button className="moreInformation button" onClick={onClickHandl}>
        More infromation
      </button>
    </div>
  );
}
