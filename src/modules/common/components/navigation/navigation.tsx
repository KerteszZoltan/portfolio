import "./navigation.scss";
import "../../styles/global.scss";

export default function Navigation() {
  return (
    <nav className="navigation-container">
      <div className="page-counter">
        <div className="page-counter-item">{"<"}</div>
        <div className="page-counter-item">{">"}</div>
      </div>
      <div className="item">
        <p className="primary-title">asd1</p>
        <p className="secoundary-title">asd1</p>
      </div>
      <div className="item">
        <p className="primary-title">asd1</p>
        <p className="secoundary-title">asd1</p>
      </div>
      <div className="item">
        <p className="primary-title">asd1</p>
        <p className="secoundary-title">asd1</p>
      </div>
    </nav>
  );
}
