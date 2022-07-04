import React from 'react'
import Image from 'next/image';
import SlashedPrice from './SlashedPrice';
import {
    AiOutlineRight
  } from "react-icons/ai";
import Link from 'next/link';
import {default  as money} from "../lib/moneyString";
import Product from './product';


const Category = ({products, title}) => {
    
  return (
    <div className='md:mt-10 bg-inherit relative '>
        {/* header */}
        <div className='w-full relative h-10  flex items-center justify-center bg-inherit'>
           
            <hr className='absolute left-0 right-0 bottom-0 top-0 m-auto  border-black/20'/>
            <p className='text-center relative h-auto w-auto m-0 leading-none px-3 bg-inherit text-xl font-semibold text-black/70 capitalize'>{title}</p>
        </div>
        {/* <div className='absolute top-0 right-0 bottom-0 m-auto h-fit p-4 bg-slate-400/60 z-[4]'>
            <div className='h-full flex items-center justify-center '><p className='text-white'>Check {`${title} section`}</p><AiOutlineRight className='text-2xl text-white text-center'/></div>
        </div> */}
        {/* Products */}
        <div className='gap-2 md:gap-5 flex justify-start overflow-y-auto '>
            
            { products.map((item)=>(
            <Product key = {item._id} Link = {Link} Image = {Image} SlashedPrice = {SlashedPrice} item = {item} money = {money}/>
            ))
            
           }
        </div>
    </div>
  )
}

export default Category