"use client";

import React from "react";
import "./Product.scss";
import Image from "next/image";
import { BiCartDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";

const Product = ({ data }) => {
  console.log(data);
  let productsItem = data?.map((el) => (
    <div key={el.id}>
      <li className="product__list-item">
        <div className="product__list-images">
          <Link href={`/product/${el.id}`}>
            <Image
              className="product__list-img"
              alt={el.title}
              width={100}
              height={100}
              src={el.image}
            />
          </Link>
        </div>
        <div className="product__list-card">
          <h3 className="product__list-title">{el.title}</h3>
          <p className="product__list-text">{el.description}</p>
          <p className="product__list-price">
            ${Math.abs(Math.round((el.price - 12.8) * 100) / 100)}
            <del>${el.price}</del>
            <b>24% Off</b>
          </p>
          <div className="product__card">
            <p className="product__card-text">
              <FaStar />
              {el.rating.rate}
            </p>
            <button className="product__card-btn">
              <BiCartDownload />
            </button>
          </div>
          <div className="product__card-heart">
            <IoMdHeartEmpty />
          </div>
        </div>
      </li>
    </div>
  ));
  let dataList = ["All", "Bags", "Sneakers", "Belt", "Sunglasses"];
  let dataItem = dataList?.map((e, inx) => (
    <li key={inx} className="products__start-list__item">{e}</li>
  ));
  return (
    <section className="product">
      <div className="container">
        <div className="product__wrapper">
          <h2 className="product__title">BEST SELLER</h2>
          <ul className="product__start-list">{dataItem}</ul>
          <ul className="product__list">{productsItem}</ul>
        </div>
      </div>
    </section>
  );
};

export default Product;
