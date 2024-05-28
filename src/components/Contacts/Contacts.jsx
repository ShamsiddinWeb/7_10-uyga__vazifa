"use client";
import React, {useState} from "react";
import "./Contacts.scss";

const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
const CHAt_ID = "-1002028151929";
const USER_ID = "6386975284";

const Contacts = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let text = "";
    text += "Mijoz Habar Yubordi: %0A%0A";
    text += `Mijoz Ismi: ${name} %0A`;
    text += `Mijoz Telefon Raqami: ${tel} %0A`;
    text += `Mijoz Habari: ${desc}`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAt_ID}&text=${text}`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    alert("Habaringiz Yuborildi Tez Orada Sizga Aloqaga Chiqamiz");
    setName(""),
    setTel(""),
    setDesc("")
  }

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__start">
          <div className="contact__left">
            <h2 className="contact__left-title">Get in touch</h2>
            <p className="contact__left-text">contact@e-comm.ng</p>
            <p className="contact__left-text">+234 4556 6665 34</p>
            <p className="contact__left-text">
              20 Prince Hakerem Lekki Phase 1, Lagos.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="contact__right">
            <label>
              <p>Fullname</p>
              <input
                className="contact__right-input"
                type="text"
                placeholder="James Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              <p>Email</p>
              <input
                className="contact__right-input"
                type="email"
                placeholder="jamesdoe@gmail.com"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                required
              />
            </label>
            <label htmlFor="">
              <p>Message</p>
              <input
                className="contact__right-inp"
                type="text"
                placeholder="Type your message"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </label>
            <button className="contact__btn">Sambit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
