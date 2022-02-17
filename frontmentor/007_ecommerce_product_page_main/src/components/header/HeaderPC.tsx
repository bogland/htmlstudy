import React from "react";
import styles from "./HeaderPC.module.scss";
type Props = {};

const HeaderPC = (props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.left}>
          <div className={styles.title}>sneakers</div>
          <ul className={styles.categoryWrap}>
            <li className={styles.category}>Collections</li>
            <li className={styles.category}>Main</li>
            <li className={styles.category}>Women</li>
            <li className={styles.category}>About</li>
            <li className={styles.category}>Contract</li>
          </ul>
        </section>

        <section className={styles.right}>
          <img className={styles.cartIcon} src="images/icon-cart.svg" />
          <img className={styles.userIcon} src="images/image-avatar.png" />
        </section>
      </header>
    </>
  );
};

export default HeaderPC;
