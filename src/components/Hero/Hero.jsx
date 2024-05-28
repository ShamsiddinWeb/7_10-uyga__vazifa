"use client";
import React, { useState, useEffect } from "react";
import "./Hero.scss";

const Hero = () => {
  //   let hour = new Date().getHours();
  //   if (hour < 10) {
  //     hour = "0" + hour;
  //   }
  //   let minute = new Date().getMinutes();
  //   if (minute < 10) {
  //     minute = "0" + minute;
  //   }
  //   let secund = new Date().getSeconds();
  //   if (secund < 10) {
  //     secund = "0" + secund;
  //   }
  // setTimeout(, 1000)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);
  let hour = time.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }

  let minute = time.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }
  let secund = time.getSeconds();
  if (secund < 10) {
    secund = "0" + secund;
  }
  function tick() {
    setTime(new Date());
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__start">
          <h1 className="hero__title">Super Flash Sale 50% Off</h1>
          <div className="hero__card">
            <div className="hero__card-span">{hour}</div>:
            <div className="hero__card-span">{minute}</div>:
            <div className="hero__card-span">{secund}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
