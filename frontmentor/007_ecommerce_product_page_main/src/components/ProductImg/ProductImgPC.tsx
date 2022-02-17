import React, { useState } from "react";
import styles from "./ProductImgPC.module.scss";
type Props = {};

const ProductImgPC = (props: Props) => {
  return (
    <>
      <section className={styles.productImgSection}>
        <img src="images/image-product-1.jpg" alt="" />
        <ul className={styles.thumbnailWrap}>
          <li className={`${styles.thumbnail} ${styles.active}`}>
            <img src="images/image-product-1-thumbnail.jpg" alt="" />
          </li>
          <li className={styles.thumbnail}>
            <img src="images/image-product-2-thumbnail.jpg" alt="" />
          </li>
          <li className={styles.thumbnail}>
            <img src="images/image-product-3-thumbnail.jpg" alt="" />
          </li>
          <li className={styles.thumbnail}>
            <img src="images/image-product-4-thumbnail.jpg" alt="" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default ProductImgPC;
