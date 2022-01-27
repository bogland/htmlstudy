import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "components/Header";
import Footer from "components/Footer";
import Content from "components/Content";

export enum StyleType {
  leftImg,
  rightImg,
}

interface dataType {
  image: string;
  title: string;
  content: string;
  type: StyleType;
}

function App() {
  const dataList: dataType[] = [
    {
      image: "/images/illustration-grow-together.svg",
      title: "Grow Together",
      content: `Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful
    conversations you miss out on with a feedback form. `,
      type: StyleType.rightImg,
    },
    {
      image: "/images/illustration-flowing-conversation.svg",
      title: "Flowing Conversations",
      content: `You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. `,
      type: StyleType.leftImg,
    },
    {
      image: "/images/illustration-your-users.svg",
      title: "Your Users",
      content: `It takes no time at all to integrate Huddle with your app's
      authentication solution. This means, once signed in to your app, your
      users can start chatting immediately. `,
      type: StyleType.rightImg,
    },
  ];
  return (
    <>
      <Header></Header>
      {dataList.map((data, index) => {
        return <Content {...data} key={index}></Content>;
      })}
      <Footer></Footer>
    </>
  );
}

export default App;
