import React from "react";
import Banner from "./Banner/Banner";
import styles from "./Header.module.scss";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <img className={styles.icon} src="images/mobile/search.png" alt="" />
          <img className={styles.logo} src="images/mobile/logo.png" alt="" />
          <img
            className={styles.icon}
            src="images/mobile/hamburger.png"
            alt=""
          />
        </nav>
        <Banner></Banner>
      </header>
    </>
  );
};

export default Header;
export {};
