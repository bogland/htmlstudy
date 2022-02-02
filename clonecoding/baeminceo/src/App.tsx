import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import TopBanner from "components/TopBanner/TopBanner";
import GNB from "components/GNB/GNB";
import CeoService from "components/CeoService/CeoService";
import BannerSlide from "components/BannerSlide/BannerSlide";
function App() {
  return (
    <>
      <header>
        <section className="topBanner">
          <TopBanner></TopBanner>
        </section>
        <section className="GNB">
          <GNB></GNB>
        </section>
        <section className="bannerSlide">
          <BannerSlide></BannerSlide>
        </section>
      </header>
      <section className="ceoService">
        <CeoService></CeoService>
      </section>
      <section className="advertiseStart"></section>
      <section className="notices"></section>
      <section className="news"></section>
      <section className="todayDate"></section>
      <section className="accoutInfo"></section>
      <section className="blog"></section>
      <section className="product"></section>
      <section className="academy"></section>
      <section className="promotion"></section>
      <footer></footer>
    </>
  );
}

export default App;
