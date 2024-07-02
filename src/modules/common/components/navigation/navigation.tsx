"use client";

import "./navigation.scss";
import "../../styles/global.scss";
import NavButton from "../buttons/navigationButton";

export default function Navigation() {
  return (
    <nav className="navigation-container">
      <div className="page-counter">
        <div className="page-counter-item">{"<"}</div>
        <div className="page-counter-item">{">"}</div>
      </div>
      <div className="item">
        <img
          className="background-image"
          src="/assets/images/Linkedin-logo.png"
          alt="LinkedIn logo"
        ></img>
        <p className="primary-title">LinkedIn</p>
        <p className="nav-description">My profile</p>
        <span className="spacer"></span>
        <NavButton
          onClick={function (): void {
            console.log("clicked");
          }}
          text={"linkedIn"}
        />
      </div>
      <div className="item">
        <img
          className="background-image"
          src="/assets/images/github-logo.png"
          alt="GitHub logo"
        ></img>
        <p className="primary-title">GitHub</p>
        <p className="nav-description">My repositories</p>
        <span className="spacer"></span>
        <div>
          <NavButton
            onClick={function (): void {
              console.log("clicked");
            }}
            text={"Github"}
          />
        </div>
      </div>
      <div className="item">
        <img
          className="background-image"
          src="/assets/images/contactus-logo.png"
          alt="Contact us logo"
        ></img>
        <p className="primary-title">Contact us</p>
        <p className="nav-description"> My personal informations</p>
        <span className="spacer"></span>
        <NavButton
          onClick={function (): void {
            console.log("clicked");
          }}
          text={"contact"}
        />
      </div>
    </nav>
  );
}
