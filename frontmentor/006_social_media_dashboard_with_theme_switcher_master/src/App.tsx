import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import ToggleBtn from "components/ToggleBtn/ToggleBtn";
function App() {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.titleWrap}>
          <h1>Social Media Dashboard</h1>
          <div>Total Followers: 23,004</div>
        </section>
        <section className={styles.darkModeWrap}>
          <ToggleBtn></ToggleBtn>
        </section>
      </header>
      <main className={styles.main}>
        <section className={styles.socialCount}>
          <article></article>
        </section>
        <section className={styles.overview}>
          <article></article>
        </section>
      </main>
    </>
  );
}

export default App;
