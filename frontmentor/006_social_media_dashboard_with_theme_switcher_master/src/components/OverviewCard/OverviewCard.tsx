import React from "react";
import styles from "./OverviewCard.module.scss";
type Props = {};

const OverviewCard = (props: Props) => {
  return (
    <>
      <article className={styles.overviewCardWrap}>
        <span className={styles.label}>Page Views</span>
        <img
          src="/images/icon-facebook.svg"
          alt=""
          className={styles.snsIcon}
        />
        <span className={styles.todayCount}>87</span>
        <section className={styles.percentWrap}>
          <img src="/images/icon-up.svg" alt="" className={styles.iconUp} />
          <span className={styles.percent}>3%</span>
        </section>
      </article>
    </>
  );
};

export default OverviewCard;
