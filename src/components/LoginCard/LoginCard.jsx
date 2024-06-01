"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "./LoginCard.scss"
import "react-toastify/dist/ReactToastify.css";

const LoginCard = () => {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const loginRouter = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const api = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (api.ok) {
      const apiToken = await api.json();
      localStorage.setItem("token", apiToken.token);
      loginRouter.push("/admin");
    } else {
      alert("loginni xato kiritdingz");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="LoginCard__section">
          <label>
            <p>Username</p>
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder={`username`}
            />
          </label>
          <label>
            <p>password</p>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder={`password`}
            />
          </label>
          <button className="LoginCard_submit">
            LOGIN
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginCard;
