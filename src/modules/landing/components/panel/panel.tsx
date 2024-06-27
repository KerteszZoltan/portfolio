import "./panel.scss";
import BackgroundVideo from "../backgroundVideo/backgroundVideo";
import landingMe from "../landing_me/landingMe";
import LandingMe from "../landing_me/landingMe";

export default function Landing() {
  return (
    <section className="panel">
      <div className="panel-content">
        <BackgroundVideo />
        <div className="panel-content-text">
          <LandingMe />
        </div>
      </div>
    </section>
  );
}
