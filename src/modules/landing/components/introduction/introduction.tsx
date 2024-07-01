import PrimaryButton from "@/modules/common/components/buttons/primaryButton";
import "./introduction.scss";

export default function Introduction() {
  return (
    <div className="intoduction-container">
      <h3 className="secoundary-title">Zoltán Kertész</h3>
      <br />
      <h1 className="primary-title">Full-stack developer</h1>
      <PrimaryButton />
    </div>
  );
}
