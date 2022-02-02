import React from "react";
import styles from "./BannerSlide.module.scss";
type Props = {};

const BannerSlide = (props: Props) => {
  const dataList = [
    {
      title: `배민 제휴 유플러스에서`,
      subTitle: `인터넷 무료\n3개월 및 추가할인!`,
      img: "images/bannerSlideImg1.png",
    },
  ];

  // dataList.push(dataList[0]);
  return (
    <>
      <ul className={styles.bannerWrap}>
        {dataList.map((data, index) => {
          return (
            <li className={styles.content} key={index}>
              <div className={styles.titleLeft}>
                <div className={styles.title}>{data.title}</div>
                <div className={styles.subTitle}>{data.subTitle}</div>
              </div>
              <div className={styles.imgRight}>
                <img src={data.img} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BannerSlide;
