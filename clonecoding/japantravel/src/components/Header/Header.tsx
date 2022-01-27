import React from "react";
import Banner from "./Banner/Banner";
import styles from "./Header.module.scss";
import { useMediaQuery } from "react-responsive";
import variables from "css/global.scss";

type Props = {};

const Header = (props: Props) => {
  const isPC = useMediaQuery({ minWidth: variables.minWidthPC });
  return (
    <>
      {!isPC && (
        <header className={styles.header}>
          <nav>
            <img
              id={styles.iconSearch}
              className={styles.icon}
              src="images/mobile/search.png"
              alt=""
            />
            <img className={styles.logo} src="images/mobile/logo.png" alt="" />
            <img
              className={styles.icon}
              src="images/mobile/hamburger.png"
              alt=""
            />
          </nav>
          <Banner></Banner>
        </header>
      )}
      {isPC && (
        <header className={styles.headerPC}>
          <nav>
            <img className={styles.logo} src="images/pc/logo.png" alt="" />
            <h2>
              내가 일본을 여행하는{" "}
              <span className={styles.highlight}>100가지</span> 이유
            </h2>
            <ul className={styles.category}>
              <li>지역</li>
              <li>테마</li>
              <li>TOPICS</li>
              <li>여행상품</li>
            </ul>
            <section className={styles.search}>
              <input type="text" />
            </section>
            <section className={styles.logoWrap}>
              <img
                className={styles.icon}
                src="images/pc/sns_facebook.png"
                alt=""
              />
              <img
                className={styles.icon}
                src="images/pc/sns_instagram.png"
                alt=""
              />
              <img
                className={styles.logo}
                src="images/pc/logo_jnto.png"
                alt=""
              />
            </section>
          </nav>
          <Banner></Banner>
        </header>
      )}
    </>
  );
};

export default Header;
