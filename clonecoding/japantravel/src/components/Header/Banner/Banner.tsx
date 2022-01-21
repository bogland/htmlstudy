import React from "react";
import styles from "./Banner.module.scss";
type Props = {};

const Banner = (props: Props) => {
  return (
    <>
      <section>
        <img
          className={styles.bannerImg}
          src="images/mobile/banner_mobile.png"
          alt=""
        />
      </section>
    </>
  );
};

export default Banner;
