import React from "react";
import "./LoginCard.scss";
import Link from "next/link";

const LoginCard = () => {
  return (
    <section className="loginCard">
      <div className="admin__card">
        <Link href={"/"}>Home</Link>/ Login
      </div>
      <div className="container">
        <form className="loginCard__form" action="">
          <label htmlFor="nima">
            <p>Username</p>
            <input type="text" id="nima" required />
          </label>
          <label htmlFor="nimaa">
            <p>Password</p>
            <input type="password" id="nimaa" required/>
          </label> <br />
          <button className="loginCard__btn">LOGIN</button>
        </form>
      </div>
    </section>
  );
};

export default LoginCard;
