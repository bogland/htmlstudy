import React, { useState } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import ToggleBtn from "components/ToggleBtn/ToggleBtn";
import SocialCard from "components/ToggleBtn/SocialCard/SocialCard";
import OverviewCard from "components/OverviewCard/OverviewCard";
function App() {
  return (
    <>
      <div className={styles.layoutBG}>
        <div className={styles.layout}>
          <header className={styles.header}>
            <section className={styles.titleWrap}>
              <h1>Social Media Dashboard</h1>
              <div className={styles.totalFollowers}>
                Total Followers: 23,004
              </div>
            </section>
            <section className={styles.darkModeWrap}>
              <ToggleBtn></ToggleBtn>
            </section>
          </header>
          <main className={styles.main}>
            <section className={styles.socialCount}>
              <SocialCard />
              <SocialCard />
              <SocialCard />
              <SocialCard />
            </section>
            <h2>Overview - Today</h2>
            <section className={styles.overview}>
              <OverviewCard />
              <OverviewCard />
              <OverviewCard />
              <OverviewCard />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
