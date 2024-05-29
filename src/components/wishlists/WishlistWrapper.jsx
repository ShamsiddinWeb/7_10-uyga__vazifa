"use client";
import Product from '@/components/product/Product'
import React from 'react'
import { useSelector } from 'react-redux'
import "./wishlist.scss"
import Link from 'next/link';

const WishlistWrapper = () => {
  let wishlist = useSelector(state => state.wishlist.value)
  return (
    <div>
      <div className="admin__card">
        <Link href={"/"}>Home</Link>/ Wishlist
      </div>
      {
        wishlist.length 
        ?
        <Product title="sevimlilar" data={wishlist} /> 
        :
        <div className="container">
          <h2 className='sevimli'>Sevimlilar ro'yxatiz hali mavjud emas!!!</h2>
        </div>
      }
    </div>
  )
}

export default WishlistWrapper