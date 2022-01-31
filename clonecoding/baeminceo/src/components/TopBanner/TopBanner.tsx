import React from "react";
import styles from "./TopBanner.module.scss";
type Props = {};

const TopBanner = (props: Props) => {
  return (
    <>
      <div className={styles.bannerWrap}>
        <div className={styles.textLeft}>
          <strong>배민1</strong>(one)지금 가입하고 <br /> 혜택을 놓치지마세요.
        </div>
        <div className={styles.imgRight}>
          <img src="images/banner-rider.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default TopBanner;
