import { IconProp } from "@fortawesome/fontawesome-svg-core";
import PrimaryButton from "../../buttons/primaryButton";
import PrimaryLink from "../../links/primaryLink";

type ItemProps = {
  title: string;
  introduction: string;
  description: string;
  icon: IconProp;
  logoUrl: string;
  link: string;
};

const NavigationItem = ({
  title,
  introduction,
  description,
  icon,
  logoUrl,
  link,
}: ItemProps) => {
  return (
    <div className="item-container">
      <img src={logoUrl} alt={title}></img>
      <p className="primary-title">{title}</p>
      <p className="introduction">{introduction}</p>
      <p className="description">{description}</p>
      <span className="spacer"></span>
      <div className="button-container">
        {title !== "CV" && (
          <PrimaryButton
            onClick={function (): void {}}
            text={title}
            icon={icon}
          />
        )}
        {title == "CV" && (
          <PrimaryLink
            onClick={function (): void {}}
            text={title}
            icon={icon}
            href={"/assets/cv/english_cv.pdf"}
          />
        )}
      </div>
    </div>
  );
};

export default NavigationItem;
