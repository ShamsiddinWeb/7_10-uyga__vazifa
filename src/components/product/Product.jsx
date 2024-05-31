"use client";

import React from "react";
import "./Product.scss";
import Image from "next/image";
import { BiCartDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toggleLike } from "@/app/lib/wishlist/wishlistSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa";
import { addToCart } from "../../app/lib/carts/cartSlice";

const Product = ({ data }) => {
  let wishlist = useSelector((state) => state.wishlist.value);

  const dispatch = useDispatch();

  function toastify() {
    toast.success("Mahsulot savatga qo'shildi!", {
      position: "top-right",
    });
  }
  // console.log(toastiyf);
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
          <Link href={`/product/${el.id}`}>
            <h3 className="product__list-title">{el.title}</h3>
          </Link>
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
          </div>
          <div className="product__card-group">
            <div
              className="product__card-heart"
              onClick={() => dispatch(toggleLike(el))}
            >
              {wishlist?.some((e) => e.id === el.id) ? (
                <FaHeart className="product__card-hearts" />
              ) : (
                <FaRegHeart />
              )}
            </div>
            <div>
              <button
                className="product__card-btn"
                onClick={() => dispatch(addToCart(el)) && toastify()}
              >
                <BiCartDownload />
              </button>
            </div>

            <Link className="product__card-btn" href={`/product/${el.id}`}>
              <FaRegEye />
            </Link>
          </div>
        </div>
      </li>
      <ToastContainer />
    </div>
  ));
  let dataList = ["All", "Bags", "Sneakers", "Belt", "Sunglasses"];
  let dataItem = dataList?.map((e, inx) => (
    <li key={inx} className="products__start-list__item">
      {e}
    </li>
  ));
  return (
    <section className="product">
      <div className="container">
        <div className="product__wrapper">
          <h2 className="product__title">BEST SELLER</h2>
          {productsItem ? (
            <div>
              <ul className="product__start-list">{dataItem}</ul>
              <ul className="product__list">{productsItem}</ul>
            </div>
          ) : (
            <ul className="loading">
              <li className="loading__list-item">
                <button className="loading__btn"></button>
                <div className="loading__img"></div>
                <h5 className="loading__list-title"></h5>
                <p className="loadings__list-text"></p>
                <div className="d">
                  <p className="b"></p>
                  <p className="loading__span"></p>
                </div>
                <p className="loading-pp"></p>
                <div className="loading__list-card">
                  <div> </div>
                  <button className="loading_list-btn"></button>
                </div>
              </li>
              <li className="loading__list-item">
                <button className="loading__btn"></button>
                <div className="loading__img"></div>
                <h5 className="loading__list-title"></h5>
                <p className="loadings__list-text"></p>
                <div className="d">
                  <p className="b"></p>
                  <p className="loading__span"></p>
                </div>
                <p className="loading-pp"></p>
                <div className="loading__list-card">
                  <div> </div>
                  <button className="loading_list-btn"></button>
                </div>
              </li>
              <li className="loading__list-item">
                <button className="loading__btn"></button>
                <div className="loading__img"></div>
                <h5 className="loading__list-title"></h5>
                <p className="loadings__list-text"></p>
                <div className="d">
                  <p className="b"></p>
                  <p className="loading__span"></p>
                </div>
                <p className="loading-pp"></p>
                <div className="loading__list-card">
                  <div> </div>
                  <button className="loading_list-btn"></button>
                </div>
              </li>
              <li className="loading__list-item">
                <button className="loading__btn"></button>
                <div className="loading__img"></div>
                <h5 className="loading__list-title"></h5>
                <p className="loadings__list-text"></p>
                <div className="d">
                  <p className="b"></p>
                  <p className="loading__span"></p>
                </div>
                <p className="loading-pp"></p>
                <div className="loading__list-card">
                  <div> </div>
                  <button className="loading_list-btn"></button>
                </div>
              </li>
              <li className="loading__list-item">
                <button className="loading__btn"></button>
                <div className="loading__img"></div>
                <h5 className="loading__list-title"></h5>
                <p className="loadings__list-text"></p>
                <div className="d">
                  <p className="b"></p>
                  <p className="loading__span"></p>
                </div>
                <p className="loading-pp"></p>
                <div className="loading__list-card">
                  <div> </div>
                  <button className="loading_list-btn"></button>
                </div>
              </li>
              <li className="loading__list-item">
                <button className="loading__btn"></button>
                <div className="loading__img"></div>
                <h5 className="loading__list-title"></h5>
                <p className="loadings__list-text"></p>
                <div className="d">
                  <p className="b"></p>
                  <p className="loading__span"></p>
                </div>
                <p className="loading-pp"></p>
                <div className="loading__list-card">
                  <div> </div>
                  <button className="loading_list-btn"></button>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
