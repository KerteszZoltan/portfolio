import { IconProp } from "@fortawesome/fontawesome-svg-core";
import PrimaryLink from "../../links/primaryLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ItemProps = {
  title: string;
  introduction: string;
  description: string;
  buttonIcon: IconProp;
  logoIcon: IconProp;
  link: string;
};

const NavigationItem = ({
  title,
  introduction,
  description,
  buttonIcon,
  logoIcon,
  link,
}: ItemProps) => {
  return (
    <div className="item-container">
      <FontAwesomeIcon className="img" icon={logoIcon} />
      <p className="primary-title">{title}</p>
      <p className="introduction">{introduction}</p>
      <p className="description">{description}</p>
      <span className="spacer"></span>
      <div className="button-container">
        <PrimaryLink
          onClick={function (): void {}}
          text={title}
          icon={buttonIcon}
          href={link}
          download={title === "CV" ? true : false}
        />
      </div>
    </div>
  );
};

export default NavigationItem;
