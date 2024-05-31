import Hero from "@/components/Hero/Hero";
import News from "@/components/News/News";
import Sneakers from "@/components/Sneakers/Sneakers";
import Category from "@/components/category/Category";
import Choose from "@/components/choose/Choose";
import Product from "@/components/product/Product";
import Service from "@/components/service/Service";
import { getData } from "@/fetch";

export default async function Home() {
  let data = await getData(`products?limit=${2 * 4}`)
  return (
    <>
      <Hero/>
       <Category/>
      <Product data= {data}/>
      <Sneakers/>
      <Service/>
      <News/>
      <Choose/> 
    </>
  );
}
