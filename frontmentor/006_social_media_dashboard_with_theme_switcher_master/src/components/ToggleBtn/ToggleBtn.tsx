import React from "react";
import styles from "./ToggleBtn.module.scss";

type Props = {};

const ToggleBtn = (props: Props) => {
  return (
    <>
      <span className={styles.label}>Dark Mode</span>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
};

export default ToggleBtn;
