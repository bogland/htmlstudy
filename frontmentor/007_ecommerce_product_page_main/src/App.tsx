import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "App.module.scss";
import Header from "components/header/Header";
import ProductImg from "components/ProductImg/ProductImg";
import ProductDescription from "components/ProductDescription/ProductDescription";
import { useMediaQuery } from "react-responsive";
import HeaderPC from "components/header/HeaderPC";
import ProductImgPC from "components/ProductImg/ProductImgPC";
function App() {
  const isPC = useMediaQuery({ minWidth: 600 });
  return (
    <div className={styles.appWrap}>
      <div className={styles.app}>
        {isPC ? <HeaderPC /> : <Header />}
        <main className={styles.main}>
          {isPC ? <ProductImgPC /> : <ProductImg />}
          <ProductDescription />
        </main>
      </div>
    </div>
  );
}

export default App;
