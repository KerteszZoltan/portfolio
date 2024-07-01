"use client";
import PrimaryButton from "@/modules/common/components/buttons/primaryButton";
import "./introduction.scss";
import "@/modules/common/styles/global.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Introduction() {
  return (
    <div className="intoduction-container">
      <h3 className="secoundary-title">Zoltán Kertész</h3>
      <h1 className="primary-title">Full-stack developer</h1>
      <span className="spacer"></span>

      <PrimaryButton
        onClick={function (): void {
          console.log("pushed");
        }}
        text={"Learn more"}
        icon={faPlay}
      />
    </div>
  );
}
