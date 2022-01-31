import React from "react";
import styles from "./GNB.module.scss";
type Props = {};

const GNB = (props: Props) => {
  return (
    <>
      <div className={styles.GNB}>
        <div className={styles.hamburgerWrap}>
          <img src="/images/hamburger.png" alt="" />
        </div>
        <div className={styles.titleLogo}>
          <img src="/images/titleLogo.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default GNB;
