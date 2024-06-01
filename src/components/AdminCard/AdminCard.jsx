"use client";
import Link from "next/link";
import React, { useEffect }  from "react";
import "./AdminCard.scss";
import { useRouter } from "next/navigation";



const AdminCard = () => {
  let loginRouter = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      loginRouter.push("/login");
    }
  }, [loginRouter]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Tizimdan chiqmoqchimisz")
    loginRouter.push("/login");
  };
  return (
    <section className="">
      <div className="admin__card">
        <Link href={"/"}>Home</Link>/ Admin
      </div>
      <div className="AdminCard container">
        <div className="AdminCard__start">
          <h2 className="AdminCard__title">Admin panel</h2>
          <p className="AdminCard__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <p className="AdminCard__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <p className="AdminCard__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur cupiditate inventore, deserunt magnam provident dolores
            blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore
            laudantium quam deleniti id consequatur. Minus delectus officia unde
            quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis,
            quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!
          </p>
          <button  onClick={() => handleLogout()} className="AdminCard__btn">Log out</button>
        </div>
      </div>
    </section>
  );
};

export default AdminCard;
