"use client";
import React, { useState } from "react";
import "./cart.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../app/lib/carts/cartSlice";
import Image from "next/image";
import Link from "next/link";
import Payment from "./Payment";

const Cart = () => {
  let [payment, setPayment] = useState(false);

  let carts = useSelector((state) => state.cart.value);
  console.log(carts);
  const dispatch = useDispatch();
  let data = useSelector((s) => s.cart.value);
  let total = data?.reduce(
    (acc, el) => acc + Math.round(el.price) * el.quantity,
    0
  );
  let cartItem = carts?.map((item) => (
    <tr key={item.id} className="cart__item">
      <td>
        <button
          className="delete"
          onClick={() => dispatch(removeItemFromCart(item))}
        >
          <AiOutlineDelete />
        </button>

        <Image src={item?.image} alt={item.title} width={137} height={94} />
        <h4 className="title" title={item?.title}>
          {item?.title}
        </h4>
      </td>
      <td className="price"> $ {Math.round(item?.price)}</td>
      <td className="qny">
        <button
          disabled={item.quantity <= 1}
          onClick={() => dispatch(decrementCartQuantity(item))}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          disabled={item.quantity >= 10}
          onClick={() => dispatch(incrementCartQuantity(item))}
        >
          +
        </button>
      </td>
      <td className="total">$ {Math.round(item?.price) * item?.quantity}</td>
    </tr>
  ));
  return (
    <div className={`admincard ${payment ? "nimadir" : ""}`}>
      <div className="admin__card">
        <Link href={"/"}>Home</Link>/ Cart
      </div>
      <div  className="cart__content container">
        {carts.length ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th className="bir">PRODUCT</th>
                  <th>PRICE</th>
                  <th>QTY</th>
                  <th>UNIT PRICE</th>
                </tr>
              </thead>
              {cartItem}
            </table>

            <div className="cart__nimadir">
              <form className="form" action="">
                <input
                  className="cupon"
                  type="text"
                  placeholder="Voucher code"
                />
                <button className="btn">nimadir</button>
              </form>
              <div className="cart__total">
                <div className="cart__shu">
                  <p>Subtotal</p>
                  <span>$ {total.toFixed(2)}</span>
                </div>
                <div>
                  <p>Shipping fee</p>
                  <span>$16.00</span>
                </div>
                <div>
                  <p>Coupon</p>
                  <span>No</span>
                </div>
                <div className="total">
                  <h4>Total</h4>
                  <span>$ {total}</span>
                </div>
                <button className="check" onClick={() => setPayment(!payment)}>
                  Check outt
                </button>
              </div>
            </div>
            <div className="patments">
              <Payment />
            </div>
          </div>
        ) : (
          <h2 className="lll">Hali Siz savatha hech narsa qo'shganiz yoq</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
