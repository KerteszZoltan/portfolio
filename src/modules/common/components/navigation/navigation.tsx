"use client";

import "./navigation.scss";
import "../../styles/global.scss";
import PrimaryButton from "../buttons/primaryButton";
import { faDownload, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <nav className="navigation-container">
      <div className="page-counter-container">
        <div className="page-counter-item">{"<"}</div>
        <div className="page-counter-item">{">"}</div>
      </div>
      <div className="item-container">
        <img src="/assets/images/Linkedin-logo.png" alt="LinkedIn logo"></img>
        <p className="primary-title">LinkedIn</p>
        <p className="nav-title">My profile</p>
        <span className="spacer"></span>
        <div className="button-container">
          <PrimaryButton
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            text={"LinkedIn"}
            icon={faPlay}
          />
        </div>
      </div>
      <div className="item-container">
        <img src="/assets/images/github-logo.png" alt="GitHub logo"></img>
        <p className="primary-title">GitHub</p>
        <p className="nav-title">Check my repository</p>
        <p className="nav-description">
          {" "}
          Here can you check my portfolio and previous projects
        </p>
        <span className="spacer"></span>
        <div className="button-container">
          <PrimaryButton
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            text={"GitHub"}
            icon={faPlay}
          />
        </div>
      </div>
      <div className="item-container">
        <img
          src="/assets/images/contactus-logo.png"
          alt="Contact us logo"
        ></img>
        <p className="primary-title">CV</p>
        <p className="nav-title"> Download my CV</p>
        <span className="spacer"></span>
        <div className="button-container">
          <PrimaryButton
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            text={"Download"}
            icon={faDownload}
          />
        </div>
      </div>
    </nav>
  );
}
