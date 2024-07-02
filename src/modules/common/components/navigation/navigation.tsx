"use client";

import "./navigation.scss";
import "../../styles/global.scss";
import { NavigationType } from "../../data/navigationData";
import NavigationItem from "./navigationItem/navigationItem";

type NavigationProps = {
  navigation: NavigationType[];
};

export default function Navigation({ navigation }: NavigationProps) {
  return (
    <nav className="navigation-container">
      <div className="page-counter-container">
        <div className="page-counter-item">{"<"}</div>
        <div className="page-counter-item">{">"}</div>
      </div>
      {navigation.map((item) => {
        return (
          <NavigationItem
            key={item.title}
            title={item.title}
            introduction={item.introduction}
            description={item.description}
            icon={item.icon}
            logoUrl={item.logoUrl}
            link={item.link}
          />
        );
      })}
    </nav>
  );
}
