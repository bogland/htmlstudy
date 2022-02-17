import React from "react";
import styles from "./ProductImg.module.scss";
type Props = {};

const ProductImg = (props: Props) => {
  return (
    <>
      <section className={styles.productImgSection}>
        <img src="images/image-product-1.jpg" alt="" />
        <button className={styles.btn}>
          <img className={styles.img} src="images/icon-previous.svg" />
        </button>
        <button className={styles.btn}>
          <img className={styles.img} src="images/icon-next.svg" />
        </button>
      </section>
    </>
  );
};

export default ProductImg;
