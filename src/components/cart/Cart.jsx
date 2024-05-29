"use client";
import React from "react";
import "./cart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../app/lib/carts/cartSlice";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  let carts = useSelector((state) => state.cart.value);
  console.log(carts);
  const dispatch = useDispatch();

  let cartItem = carts?.map((item) => (
    <div className="cartItem" key={item.id}>
      <div className="aa">
        <button
          className="delete"
          onClick={() => dispatch(removeItemFromCart(item))}
        >
          <span className="span"> x</span>
        </button>
        <Image src={item.image} alt={item.title} width={150} height={100} />
        <p className="cart__tite">{item.title}</p>
      </div>
      <p>{item.price} USD</p>
      <div className="btn__ick">
        <button
          className="dec"
          disabled={item.quantity <= 1}
          onClick={() => dispatch(decrementCartQuantity(item))}
        >
          -
        </button>
        <span className="vv">{item.quantity}</span>
        <button
          className="dec"
          onClick={() => dispatch(incrementCartQuantity(item))}
        >
          +
        </button>
      </div>
      <p className="quantity"> ${item.price * item.quantity}</p>
    </div>
  ));
  return (
    <div>
      <div className="admin__card">
        <Link href={"/"}>Home</Link>/ Cart
      </div>
      <div className="cart container">
        {carts.length ? (
          <div>
            <div className="pro">
              <h3 className="products">PRODUCT</h3>
              <p>PRICE</p>
              <p>QTY</p>
              <p>UNIT PRICE</p>
            </div>
            {cartItem}
          </div>
        ) : (
          <h2 className="lll">Hali Siz savatha hech narsa qo'shganiz yoq</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
