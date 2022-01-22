import React from "react";
import CardCampaignList, {
  CardType,
} from "./CardCampaignList.tsx/CardCampaignList";
import styles from "./Main.module.scss";
type Props = {};

const Main = (props: Props) => {
  const data = [
    {
      title: `
    The Reason_오늘, 여기, 일본
    <br/>
    내가 떠나고 싶은 일본여행의 테마는?
    `,
      typeName: "CAMPAIGN",
      img: "/images/mobile/sample.png",
    },
  ];
  for (var i = 0; i < 3; i++) {
    data.push(data[0]);
  }

  return (
    <>
      <main className={styles.main}>
        <h2>
          <span className={styles.highLight}>NOW.</span> JAPAN
        </h2>
        <CardCampaignList list={data} type={CardType.Banner} />
        <CardCampaignList list={data} type={CardType.Video} />
      </main>
    </>
  );
};

export default Main;
export {};
