"use client";
import React, { useState } from "react";
import "./cart.scss";

const BOT_TOKEN = "6708331572:AAGi5u0j5WT-UkQ0u7eU69qHg3ZCE59DKbc";
const CHAt_ID = "-1002028151929";
const USER_ID = "6386975284";

const Payment = () => {
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
  }

  return (
    <div className="container">
      <div className="payment container">
        <h3 className="payment__title">Make Payment</h3>
    
        <form onSubmit={handleSubmit} className="payment__card">
          <div className="payment__card-group">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <br />
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder="Email Address"
            />
            <br />
            <select name="Select Method of Payment" id="">
              <option value="">Credit Card Or Debit</option>
              <option value="">Paypal</option>
              <option value="">Bank Transfer</option>
            </select>
          </div>
          <div className="payment__card-group">
            <input type="text" id="" placeholder="Last Name" />
            <br />
            <input type="text" placeholder="Address for Delivery" />
            <br />
            <input
              type="number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="Mobile Phone"
            />
          </div>
        </form>
        <button>Go to Payment</button>
      </div>
    </div>
  );
};

export default Payment;
