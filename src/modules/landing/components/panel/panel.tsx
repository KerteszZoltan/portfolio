import "./panel.scss";
import BackgroundVideo from "../backgroundVideo/backgroundVideo";
import Intoduction from "../introduction/introduction";

export default function Landing() {
  return (
    <section className="panel">
      <div className="panel-content">
        <BackgroundVideo />
        <Intoduction />
      </div>
    </section>
  );
}
