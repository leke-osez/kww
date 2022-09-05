import React from 'react'
import Image from 'next/image';
import SlashedPrice from './SlashedPrice';
import {
    AiOutlineRight
  } from "react-icons/ai";
import Link from 'next/link';
import {default  as money} from "../lib/moneyString";
import Product from './Product';


const Category = ({products, filter}) => {
  return (
    <div className='md:mt-10 bg-inherit relative min-w-[100vh]'>
        {/* header */}
        {/* <div className='w-full relative h-10  flex items-center justify-center bg-inherit'>
           
            <hr className='absolute left-0 right-0 bottom-0 top-0 m-auto  border-black/20'/>
            <p className='text-center relative h-auto w-auto m-0 leading-none px-3 bg-inherit text-xl font-semibold text-black/70 capitalize'>{title}</p>
        </div> */}
        {/* <div className='absolute top-0 right-0 bottom-0 m-auto h-fit p-4 bg-slate-400/60 z-[4]'>
            <div className='h-full flex items-center justify-center '><p className='text-white'>Check {`${title} section`}</p><AiOutlineRight className='text-2xl text-white text-center'/></div>
        </div> */}
        {/* Products */}
        <div className='mr-3 md:mr-5 xl:mr-7 gap-4 md:gap-5 xl:gap-7 grid sm:grid-cols-3 xl:grid-cols-4 grid-cols-2 products_category'>
            
            { filter === 'all' && products.map((item)=>(
              
            <Product key = {item._id} Link = {Link} Image = {Image} SlashedPrice = {SlashedPrice} item = {item} money = {money}/>
            ))
            
           }
           {
            filter !== 'all' && products.map((item)=>{
              if (item.category === filter){
              return <Product key = {item._id} Link = {Link} Image = {Image} SlashedPrice = {SlashedPrice} item = {item} money = {money}/>}
              else{
                return
              }
              })
           }
        </div>
    </div>
  )
}

export default Category


