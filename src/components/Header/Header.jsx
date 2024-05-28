"use client";
import React, { useState } from "react";
import "./Header.scss";
import { RiAdminLine } from "react-icons/ri";
import { CgHeart } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import header__logo from "../../assets/icon/header__logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  let data = [
    {
      id: 1,
      title: "HOME",
      link: "/",
    },
    {
      id: 2,
      title: "BAGS",
      link: "/bags",
    },
    {
      id: 3,
      title: "SNEAKERS",
      link: "/sneakers",
    },
    {
      id: 4,
      title: "BELT",
      link: "/belt",
    },
    {
      id: 5,
      title: "CONTACT",
      link: "/contact",
    },
  ];
  let dataItem = data?.map((e) => (
    <li key={e.id} className="header__end-list__item">
      <Link onClick={() => setToggle(false)} href={e.link} className="header__end-list__link">
        {e.title}
      </Link>
    </li>
  ));

  const [shrink, setShrink] = useState(false);
  const [toogle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });
  return (
    <header className={`header ${toogle ? "open" : ""}`}>
      <div className={`header__wrapper ${shrink ? "shrink" : ""}`}>
        <div className="header__start">
          <div className="container">
            <div className="header__start-wrapper">
              <div className="header__start-left">
                <select className="header__start-slect">
                  <option>EN</option>
                  <option>UZ</option>
                  <option>RU</option>
                </select>
                <select className="header__start-slect">
                  <option>USD</option>
                  <option>RUB</option>
                  <option>EUR</option>
                </select>
              </div>
              <div className={`header__start-right ${search ? "search" : ""}`}>
                <div className="header__start-card">
                  <Link
                    href={"/"}
                    className="header__start-card__group header__start-home"
                  >
                    <IoHomeOutline />
                    <p>Home</p>
                  </Link>
                  <button
                    className="header__start-card__group header__start-home"
                  
                  >
                    <IoSearch  onClick={() => setSearch(!search)}/>
                    <form className="header__start-card__form">
                      <input
                        className="header__start-card__inp"
                        type="search"
                        placeholder="qidiruv..."
                      />
                      <button>search</button>
                    </form>
                    <p onClick={() => setSearch(!search)}>Explore</p>
                  </button>
                  <RiAdminLine className="header__start-admin" />
                  <Link
                    href={"/wishlist"}
                    className="header__start-card__group"
                  >
                    <CgHeart />
                    <p>Wishlist</p>
                  </Link>
                  <Link href={"/cart"} className="header__start-card__group">
                    <FiShoppingCart />
                    <p>Cart</p>
                  </Link>
                  <Link
                    href={"/admin"}
                    className="header__start-card__group header__start-home"
                  >
                    <RiAdminLine />
                    <p>Account</p>
                  </Link>
                </div>
                <p className="header__start-items">Items</p>
                <p className="header__start-sena">
                  $0.00
                  <IoSearch className="header__start-admin" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="header__end">
          <div className="container">
            <div className="header__end-wrapper">
              <Link href={"/"}>
                <Image
                  alt="header__logo"
                  width={134}
                  height={40}
                  src={header__logo}
                />
              </Link>
              <ul className="header__end-list">{dataItem}</ul>
              <div className="header__menu-burgers">
                <button
                  className="header__menu"
                  id="menu-burger"
                  onClick={() => setToggle(!toogle)}
                >
                  <span className="header__menu-span"></span>
                  <span className="header__menu-span"></span>
                  <span className="header__menu-span"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
