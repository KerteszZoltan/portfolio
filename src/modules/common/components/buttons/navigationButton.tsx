import "./navigationButton.scss";

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const NavButton = ({ onClick, text }: ButtonProps) => {
  return (
    <button className="navigation-button" onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default NavButton;
