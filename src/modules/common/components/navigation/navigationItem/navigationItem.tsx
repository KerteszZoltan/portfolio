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
    <div className="item">
      <FontAwesomeIcon className="item-navigation-icon" icon={logoIcon} />
      <p className="item-navigation-title">{title}</p>
      <p className="item-navigation-introduction">{introduction}</p>
      {description !== "" ? (
        <p className="item-navigation-show-more">Show more</p>
      ) : (
        <p className="item-navigation-show-more"></p>
      )}
      <p className="item-navigation-description">{description}</p>
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
