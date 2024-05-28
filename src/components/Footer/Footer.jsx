import React from "react";
import "./Footer.scss"
import footerLogo from "../../assets/icon/header__logo.svg";
import brands from "../../assets/icon/Brands.svg"
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  let dataOne = [
    "About Us",
    "Infomation",
    "Privacy Policy",
    "Terms & Conditions",
  ];
  let OneItem = dataOne?.map((e, inx) => (
    <li key={inx} className="footer__midway-card__list-item">
      {e}
    </li>
  ));
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__start">
          <div className="footer__start-card">
            <Image alt="Logo" width={134} height={44} src={footerLogo} />
            <p className="footer__start-card__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="footer__start-card">
            <h3 className="footer__start-card__title">Follow Us</h3>
            <p className="footer__start-card__text">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <FaFacebookF />
            <FaTwitter />
          </div>
          <div className="footer__start-card">
            <h3 className="footer__start-card__title">Contact Us</h3>
            <p className="footer__start-card__text">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
        <div className="footer__midway">
          <div className="footer__midway-card">
            <h3 className="footer__midway-card__title">Infomation</h3>
            <ul className="footer__midway-card__list">{OneItem}</ul>
          </div>
          <div className="footer__midway-card">
            <h3 className="footer__midway-card__title">Service</h3>
            <ul className="footer__midway-card__list">{OneItem}</ul>
          </div>
          <div className="footer__midway-card">
            <h3 className="footer__midway-card__title">My Account</h3>
            <ul className="footer__midway-card__list">{OneItem}</ul>
          </div>
          <div className="footer__midway-card">
            <h3 className="footer__midway-card__title">Our Offers</h3>
            <ul className="footer__midway-card__list">{OneItem}</ul>
          </div>
        </div>
        <div className="footer__end">
          <p className="footer__end">© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <Image src={brands} width={212} height={25} alt="brands" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
