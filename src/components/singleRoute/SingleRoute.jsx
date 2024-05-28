"use client";
import Image from "next/image";
import React, { useState } from "react";
import rate from "../../assets/icon/rate.svg";
import colors from "../../assets/icon/colors.svg";
import { BiCartDownload } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import "./SingleRoute.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SingleRoute = ({ data }) => {
  let [count, setCount] = useState(1);
  return (
    <div className="singleRoute">
      <div className="container">
        <div className="singleRoute__start">
          <div className="singleRoute__left">
            <Image
              className="singleRoute__left-img"
              src={data.image}
              width={370}
              height={270}
              alt={data.title}
            />
            <div className="singleRoute__left-card">
              <Image
                className="singleRoute__left-imges"
                src={data.image}
                width={85}
                height={85}
                alt={data.title}
              />
              <Image
                className="singleRoute__left-imges"
                src={data.image}
                width={85}
                height={85}
                alt={data.title}
              />
              <Image
                className="singleRoute__left-imges"
                src={data.image}
                width={85}
                height={85}
                alt={data.title}
              />
              <Image
                className="singleRoute__left-imges"
                src={data.image}
                width={85}
                height={85}
                alt={data.title}
              />
            </div>
          </div>
          <div className="singleRoute__midway">
            <h3 className="singleRoute__midway-title">{data.title}</h3>
            <div className="singleRoute__midway-group">
              <Image src={rate} width={76} height={10} alt="rate" />
              <p className="singleRoute__midway-text">
                {data.rating.count} reviews
              </p>
              <p className="singleRoute__midway-text2">Submit a review</p>
            </div>
            <div className="singleRoute__midway-group singleRoute__midway-border">
              <p className="singleRoute__midway-text3">${data.price - 15.92}</p>
              <p className="singleRoute__midway-text">
                <del>${data.price}</del>
              </p>
              <p className="singleRoute__midway-text4">24% Off</p>
            </div>
            <div className="singleRoute__midway-card">
              <p className="singleRoute__midway-card__text">Availability:</p>
              <p className="singleRoute__midway-card__text">In stock</p>
            </div>
            <div className="singleRoute__midway-card">
              <p className="singleRoute__midway-card__text">Category:</p>
              <p className="singleRoute__midway-card__text">{data.category}</p>
            </div>
            <div className="singleRoute__midway-card">
              <p className="singleRoute__midway-card__text">Free shipping</p>
            </div>
            <div className="singleRoute__midway-card singleRoute__midway-border">
              <p className="singleRoute__midway-card__text ">Select Color:</p>
              <Image src={colors} width={150} height={27} alt="colors" />
            </div>
            <div className="singleRoute__midway-card">
              <p className="singleRoute__midway-card__text">Size</p>
              <select>
                <option value="">XS</option>
                <option value="">L</option>
                <option value="">LM</option>
                <option value="">XXS</option>
              </select>
            </div>
            <div className="singleRoute__midway-nimadir singleRoute__midway-border">
              <p className="singleRoute__midway-nimadir__text">
                <button
                  disabled={count <= 1}
                  onClick={() => setCount((p) => p - 1)}
                >
                  -
                </button>
                {count}
                <button onClick={() => setCount((p) => p + 1)}>+</button>
              </p>
              <div>
                <BiCartDownload />
                <IoMdHeartEmpty />
              </div>
            </div>
          </div>
          <div className="singleRoute__right">
            <p className="singleRoute__right-text">BEST SELLER</p>
            <div className="singleRoute__right-card">
              <Image
                className="singleRoute__left-img"
                src={data.image}
                width={280}
                height={230}
                alt={data.title}
              />
              <br />
              <Image src={rate} width={76} height={10} alt="rate" />
              <p className="singleRoute__right-text3">
                {data.price - 15.92} <del>${data.price}</del>
              </p>
            </div>
          </div>
        </div>
        <div className="singleRoute__button">
          <a
            className="singleRoute__button-btn1"
            href="https://www.facebook.com/?locale=ru_RU"
            target="_blanc"
          >
            <FaFacebookF /> Share on Facebook
          </a>
          <a
            className="singleRoute__button-btn2"
            href="https://twitter.com/?lang=ru"
            target="_blanc"
          >
            <FaTwitter /> Share on Twitter
          </a>
        </div>
        <div className="singleRoute__end">
          <div className="singleRoute__end-card">
            <h3>Product Infomation</h3>
            <h3>Reviews</h3>
            <h3>Another tab</h3>
          </div>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
