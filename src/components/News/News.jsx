import React from "react";
import "./News.scss";
import Image from "next/image";
import nike from "../../assets/icon/Nike.svg";
import figma from "../../assets/icon/figma.svg";
import kronos from "../../assets/icon/kronos.svg";

const News = () => {
  let data = [
    {
      id: 1,
      img: nike,
      span: "01 Jan, 2015",
      title: "Fashion Industry",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      img: figma,
      span: "01 Jan, 2015",
      title: "Best Design Tools",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      img: kronos,
      span: "01 Jan, 2015",
      title: "HR Community",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  let newsItem = data?.map((e) => (
    <li key={e.id} className="news__list-item">
      <Image
        className="news__list-img"
        src={e.img}
        width={150}
        height={80}
        alt={e.title}
      />
      <div className="news__list-card">
        <p className="news__list-span">{e.span}</p>
        <h4 className="news__list-title">{e.title}</h4>
        <p className="news__list-text">{e.text}</p>
      </div>
    </li>
  ));
  return (
    <section className="news">
      <div className="container">
        <div className="news__start">
          <h3 className="news__title">LATEST NEWS</h3>
          <ul className="news__list">{newsItem}</ul>
        </div>
      </div>
    </section>
  );
};

export default News;
