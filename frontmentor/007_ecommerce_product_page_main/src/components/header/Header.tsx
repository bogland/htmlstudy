import React from "react";
import styles from "./Header.module.scss";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.left}>
          <img className={styles.menuIcon} src="images/icon-menu.svg" alt="" />
          <h1>sneakers</h1>
        </section>
        <section className={styles.right}>
          <img className={styles.cartIcon} src="images/icon-cart.svg" />
          <img className={styles.userIcon} src="images/image-avatar.png" />
        </section>
      </header>
    </>
  );
};

export default Header;
