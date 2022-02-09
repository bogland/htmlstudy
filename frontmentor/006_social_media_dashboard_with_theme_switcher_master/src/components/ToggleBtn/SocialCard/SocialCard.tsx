import React from "react";
import styles from "./SocialCard.module.scss";
type Props = {};

const SocialCard = (props: Props) => {
  return (
    <>
      <article
        className={styles.socialCardWrap}
        style={{ borderTop: "red 4px solid" }}
      >
        <section className={styles.snsIconWrap}>
          <img
            className={styles.snsIcon}
            src="/images/icon-facebook.svg"
            alt=""
          />
          <span className={styles.userName}>@nathnf</span>
        </section>
        <div className={styles.followerNum}>1987</div>
        <div className={styles.labelFollowers}>FOLLOWERS</div>
        <div className={styles.todayNum}>
          <img src="/images/icon-up.svg" />
          <span>99 Today</span>
        </div>
      </article>
    </>
  );
};

export default SocialCard;
