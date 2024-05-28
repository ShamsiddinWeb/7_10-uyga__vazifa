import React from "react";
import "./Choose.scss";
import rasm from "../../assets/img/rasm.png";
import rate from "../../assets/icon/rate.svg";
import Image from "next/image";

const Choose = () => {
  let data = [
    {
      id: 1,
      img: rasm,
      icon: rate,
      title: "Blue Swade Nike Sneakers",
      text: "$499",
      b: "$599",
    },
    {
      id: 2,
      img: rasm,
      icon: rate,
      title: "Blue Swade Nike Sneakers",
      text: "$499",
      b: "$599",
    },
    {
      id: 3,
      img: rasm,
      icon: rate,
      title: "Blue Swade Nike Sneakers",
      text: "$499",
      b: "$599",
    },
  ];
  let chooseItem = data?.map((e) => (
    <li key={e.id} className="choose__list-item">
      <Image src={e.img} width={154} height={154} alt="e.title" />
      <div className="choose__list-card">
        <p className="choose__list-title">{e.title}</p>
        <Image src={e.icon} width={86} height={12} alt="rate" />
        <p className="choose__list-text">
          {e.text}
          <del>{e.b}</del>
        </p>
      </div>
    </li>
  ));
  return (
    <section className="choose">
      <div className="container">
        <div className="choose__start">
          <h3 className="news__title">FEATURED PRODUCTS</h3>
          <ul className="choose__list">{chooseItem}</ul>
          <form className="choose__form">
            <input className="choose__form-inp" type="search" placeholder="Search query..." required/>
            <button className="choose__form-btn">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Choose;
