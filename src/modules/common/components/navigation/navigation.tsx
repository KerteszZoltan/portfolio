"use client";

import "./navigation.scss";
import "../../styles/global.scss";
import { NavigationType } from "../../data/navigationData";
import NavigationItem from "./navigationItem/navigationItem";
import Pagination from "../pagination/pagination";
import { useNavStore } from "../../store/navigationStore";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import PrimaryBackButton from "../buttons/primaryBackButton";

export default function Navigation() {
  const isOpen = useNavStore((state) => state.isOpen);
  const setIsOpen = useNavStore((state) => state.setIsOpen);
  const content = useNavStore((state) => state.content);
  const setContent = useNavStore((state) => state.setContent);
  const setNextPage = useNavStore((state) => state.setNextPage);
  const setPreviousPage = useNavStore((state) => state.setPreviousPage);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return isOpen ? (
    <motion.nav
      className="navigation-container"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 1 }}
    >
      <div className="navigation-panel">
        <div className="page-counter-container">
          <PrimaryBackButton
            onClick={() => setIsOpen(!isOpen)}
            text={"Back"}
            icon={faXmark}
          />
          <div>
            <Pagination
              items={content}
              currentPage={0}
              handlePrevPage={() => setPreviousPage}
              handleNextPage={() => setNextPage}
            />
          </div>
        </div>
        <div className="item-container">
          <div className="item-container-slider">
            {content.map((item, index) => {
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
          </div>
        </div>
      </div>
    </motion.nav>
  ) : null;
}
