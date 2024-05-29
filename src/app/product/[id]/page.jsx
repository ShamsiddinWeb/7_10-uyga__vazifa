import React from 'react'
import { getData } from '@/fetch'
import SingleRoute from '@/components/singleRoute/SingleRoute'
import Product from '@/components/product/Product'  

const single = async ({params: {id}}) => {
  let data1 = await getData(`products/${id}`)
  let data = await getData("products?limit=4")
  return (
    <div>
      <SingleRoute data1={data1}/>
      <Product data ={data}/>
    </div>
  )
}

export default single