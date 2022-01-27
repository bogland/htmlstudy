import React from "react";
import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.topWrap}>
          <img className={styles.logo} src="images/logo.svg" alt="" />

          <div className={styles.freeBtn}>
            <span>Try it Free</span>
          </div>
        </section>
        <section className={styles.headerContent}>
          <section className={styles.left}>
            <div className={styles.title}>
              Build The Community
              <br /> Your Fans Will Love
            </div>
            <div className={styles.content}>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </div>
            <div className={styles.freeBtn}>
              <span>Get Started For Free</span>
            </div>
          </section>
          <img
            className={styles.mockupImg}
            src="images/illustration-mockups.svg"
            alt=""
          />
        </section>
      </header>
    </>
  );
};

export default Header;
