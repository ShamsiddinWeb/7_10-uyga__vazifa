"use client";
import React from "react";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import icon1 from "../../assets/icon/icon1.svg";
import icon2 from "../../assets/icon/icon2.svg";
import icon3 from "../../assets/icon/icon3.svg";
import icon4 from "../../assets/icon/icon4.svg";
import Image from "next/image";
import "./Category.scss";

const Category = () => {
  let data = [
    {
      id: 1,
      icon: icon1,
      text: "Man Shirt",
    },
    {
      id: 2,
      icon: icon2,
      text: "Dress",
    },
    {
      id: 3,
      icon: icon3,
      text: "Man Work Equipment",
    },
    {
      id: 4,
      icon: icon4,
      text: "Woman Bag",
    },
  ];
  let dataItem = data?.map((e) => (
    <li key={e.id} className="categoryTwo__list-item">
      <div  className="categoryTwo__list-img">
        <Image width={24} height={24} alt={e.text} src={e.icon}/>
      </div>
      <p className="categoryTwo__list-text">{e.text}</p>
    </li>
  ));
  return (
    <section className="category">
      <div className="container">
        <div className="category__start">
          <ul className="category__list">
            <li className="category__list-item">
              <h3 className="category__list-title">
                FS - QUILTED MAXI CROSS BAG
              </h3>
              <Image
                className="category__list-img"
                src={img1}
                width={300}
                height={100}
                alt="Image"
              />
              <p className="category__list-text">
                <del>$534,33</del> <span>24% Off</span>
              </p>
              <p className="category__list-sena">$299,43</p>
            </li>
            <li className="category__list-item">
              <h3 className="category__list-title">
                FS - Nike Air Max 270 React...
              </h3>
              <Image
                className="category__list-img"
                src={img2}
                width={315}
                height={110}
                alt="Image"
              />
              <p className="category__list-text2">
                <del>$534,33</del> <span>24% Off</span>
              </p>
              <p className="category__list-sena2">$299,43</p>
            </li>
            <li className="category__list-item">
              <h3 className="category__list-title">
                FS - QUILTED MAXI CROSS BAG
              </h3>
              <p className="category__list-text3">
                <del>$534,33</del> <span>24% Off</span>
              </p>
              <Image
                className="category__list-img"
                src={img3}
                width={295}
                height={100}
                alt="Image"
              />
              <p className="category__list-sena">$299,43</p>
            </li>
          </ul>
          <div className="categoryTwo">
            <div className="categoryTwo__card">
              <h3 className="categoryTwo__card-title">Category</h3>
              <p className="categoryTwo__card-text">More Category</p>
            </div>
            <ul className="categoryTwo__list">{dataItem}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
