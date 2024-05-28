import React from "react";
import "./Sneakers.scss";
import sneakers from "../../assets/img/sneakers.png";
import Image from "next/image";

const Sneakers = () => {
  return (
    <section className="sneakers">
      <div className="container">
        <div className="sneakers__start">
          <div className="sneakers__card">
            <h3 className="sneakers__title">Adidas Men Running Sneakers</h3>
            <p className="sneakers__text">
              Performance and design. Taken right to the edge.
            </p>
            <a href="#">SHOP NOW</a>
          </div>
          <Image className="sneakers__img" width={700} height={580} alt="sneakers" src={sneakers}/>
        </div>
      </div>
    </section>
  );
};

export default Sneakers;
