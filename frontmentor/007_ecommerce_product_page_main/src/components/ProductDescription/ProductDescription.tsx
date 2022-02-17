import React from "react";
import styles from "./ProductDescription.module.scss";
type Props = {};

const ProductDescription = (props: Props) => {
  return (
    <>
      <section className={styles.productDetailSection}>
        <section className={styles.productDescriptionSection}>
          <h2 className={styles.brandName}>SNEAKER COMPANY</h2>
          <div className={styles.title}>FALL Limited Edition Sneakers</div>
          <p className={styles.description}>
            These low-profile sneakers are aoiejfawe lkfjwleifjwaleif
            jwleifjaoiejfawelkfjwleifjwaleif jwleifj
          </p>
        </section>
        <section className={styles.priceSection}>
          <div className={styles.priceWrap}>
            <div className={styles.salePrice}>$125.00</div>
            <div className={styles.salePercent}>50%</div>
          </div>
          <div className={styles.retailPrice}>$250.00</div>
        </section>
        <section className={styles.priceQuantitySection}>
          <button className={styles.btn}>-</button>
          <div>0</div>
          <button className={styles.btn}>+</button>
        </section>
        <button className={styles.cartBtnWrap}>
          <img className={styles.cartIcon} src="images/icon-cart.svg" />
          <div className={styles.btnLabel}>Add to cart</div>
        </button>
      </section>
    </>
  );
};

export default ProductDescription;
