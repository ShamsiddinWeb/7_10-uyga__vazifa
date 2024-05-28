import React from "react";
import "./Service.scss";
import shipping from "../../assets/icon/shipping.svg";
import refung from "../../assets/icon/refung.svg";
import support from "../../assets/icon/support.svg";
import Image from "next/image";

const Service = () => {
  let data = [
    {
      id: 1,
      img: shipping,
      title: "FREE SHIPPING",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      img: refung,
      title: "100% REFUND",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      img: support,
      title: "SUPPORT 24/7",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  let serviceItem = data?.map((e) => (
    <li key={e.id} className="service__list-item">
      <Image className="service__list-img" width={100} height={25} alt={e.title} src={e.img} />
      <h3 className="service__list-title">{e.title}</h3>
      <p className="service__list-text">
        {e.text}
      </p>
    </li>
  ));
  return (
    <section className="service">
      <div className="container">
        <div className="service__start">
          <ul className="service__list">{serviceItem}</ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
