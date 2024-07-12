"use client";

import "./navigation.scss";
import "../../styles/global.scss";
import { NavigationType } from "../../data/navigationData";
import NavigationItem from "./navigationItem/navigationItem";
import Pagination from "../pagination/pagination";
import { useNavStore } from "../../store/navigationStore";

type NavigationProps = {
  navigation: NavigationType[];
};

export default function Navigation({ navigation }: NavigationProps) {
  const { currentPage, setCurrentPage, setIsOpen } = useNavStore();
  //console.log(navigation);

  return (
    <nav className="navigation-container">
      <div className="page-counter-container">
        <button className="exit" onClick={setIsOpen}>
          teszt
        </button>
        <div>
          <Pagination
            items={navigation}
            currentPage={currentPage}
            increaseCurrntPage={function (): void {}}
            setCurrentPage={setCurrentPage}
            setContent={function (element: NavigationType[]): void {}}
          />
        </div>
      </div>
      {navigation.map((item, index) => {
        return (
          <NavigationItem
            key={index}
            title={item.title}
            introduction={item.introduction}
            description={item.description}
            buttonIcon={item.buttonIcon}
            logoIcon={item.logoIcon}
            link={item.link}
          />
        );
      })}
    </nav>
  );
}
