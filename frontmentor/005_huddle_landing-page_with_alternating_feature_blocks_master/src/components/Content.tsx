import { StyleType } from "App";
import React from "react";
import styles from "./Content.module.scss";

type Props = {
  image: "";
  title: "";
  content: "";
  type: StyleType.leftImg;
};

const Content = (props: any) => {
  const isLeft = props.type == StyleType.leftImg;
  return (
    <>
      <section
        className={`${styles.contentWrap} ${isLeft ? "" : styles.reverse}`}
      >
        <img className={styles.img} src={props?.image} alt="" />
        <section className={styles.contextWrap}>
          <div className={styles.title}>{props?.title}</div>
          <div className={styles.content}>{props?.content}</div>
        </section>
      </section>
    </>
  );
};

export default Content;
