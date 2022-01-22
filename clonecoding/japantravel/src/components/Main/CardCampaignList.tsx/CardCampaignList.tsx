import React from "react";
import styles from "./CardCampaignList.module.scss";

export enum CardType {
  Banner = 0,
  Video,
}

interface CardCampaign {
  title: string;
  typeName: string;
  img: string;
}

type Props = {
  list?: CardCampaign[];
  type: CardType;
};

const CardCampaignList = (props: Props) => {
  const isVideo = props?.type == CardType.Video;
  return (
    <>
      <section className={styles.cardCampaignWrap}>
        {props.list?.map((item, index) => {
          return (
            <article className={styles.cardCampaign} key={index}>
              <img className={styles.itemImg} src={item?.img} alt="" />
              <section
                className={`${styles.contentWrap} ${isVideo && styles.Video}`}
              >
                <div
                  className={styles.title}
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                ></div>
                <div className={styles.cardTypeWrap}>
                  {!isVideo && <img src="/images/mobile/flag.png" />}
                  <div className={styles.cardType}>{item?.typeName}</div>
                </div>
              </section>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default CardCampaignList;
