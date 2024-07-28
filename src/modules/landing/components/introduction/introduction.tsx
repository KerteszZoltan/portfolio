"use client";
import PrimaryButton from "@/modules/common/components/buttons/primaryButton";
import "./introduction.scss";
import "@/modules/common/styles/global.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavStore } from "@/modules/common/store/navigationStore";
import { contactData } from "../../../common/data/navigationData";

export default function Introduction() {
  const { isOpen, setIsOpen, setContent } = useNavStore();
  return (
    <div className="intoduction-container">
      <h3 className="secoundary-title">Zoltán Kertész</h3>
      <h1 className="primary-title">Full-stack developer</h1>
      <span className="spacer"></span>

      <PrimaryButton
        onClick={() => {
          setIsOpen(!isOpen);
          setContent(contactData);
        }}
        text={"Learn more"}
        icon={faPlay}
      />
    </div>
  );
}
