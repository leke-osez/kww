import React from 'react'
import Link from 'next/link'
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
  return (
    <div className='w-full bg-[#031B34] h-fit py-5 mt-10 md:px-10 xl:px-20 md:py-10'>
      {/* Top footer */}
      <div className='flex md:gap-7 gap-x-7 gap-y-7 flex-wrap sm:justify-between  text-white py-5 xl:px-40 px-5 md:px-20'>

      <div className='w-[100px] md:w-fit'>
        {/* Name and Logo */}
        <p className='w-fit md:text-xl md:font-bold font-semibold'>KWW <span className='md:text-lg md:font-semibold md:ml-2 text-white/60 md:inline block'>Kings With Waves</span></p>
        
        <p>Your hair is your crown</p>
      </div>

      {/* Explore */}
      <div >
        <p className='md:text-lg md:font-semibold'>Explore</p>
        <Link href={'/'}><p className='text-white/60 cursor-pointer'>Home</p></Link>
        <Link href = {'/products'}><p className='text-white/60 cursor-pointer'>Products</p></Link>
        <Link href = {'/blog'}><p className='text-white/60 cursor-pointer'>Blog</p></Link>
      </div>

      <div >
        <p className='md:text-lg md:font-semibold'> Products </p>
        <Link href={'/categories/brush'}><p className='text-white/60 cursor-pointer' >Wave brush</p></Link>
        <Link href={'/categories/durag'}><p className='text-white/60 cursor-pointer'>Durags</p></Link>
        <Link href={'/categories/creamAndOil'}><p className='text-white/60 cursor-pointer'>Hair cream</p></Link>
        <Link href={'/categories/shampoo'}><p className='text-white/60 cursor-pointer'>Shampoo</p></Link>
        <Link href={'/categories/blog'}><p className='text-white/60 cursor-pointer'>Blog</p></Link>
      </div>

      <div className='flex flex-col gap-2'>
        <Link href={'/about'}><p className='cursor-pointer'>ABOUT US</p></Link>
        <Link href={'/support'}><p className='cursor-pointer'>CONTACT US</p></Link>
        <Link href={''}><p className='cursor-pointer'>TERMS</p></Link>
        <Link href={'/'}><p className='cursor-pointer'>POLICIES</p></Link>
        
      </div>
      </div>
      
      <div className="w-full m-auto rounded-full line-grad-col h-[2px] mb-5" />
        {/* Bottom Footer */}
        <div className='w-full flex gap-3 md:gap-5 justify-center'>
        ` <div className='text-white border-[2px] border-white p-2 rounded-full aspect-square flex items-center justify-center'><AiFillInstagram /></div>
          <div className="text-white border-[2px] border-white p-2 rounded-full aspect-square flex items-center justify-center"><BsTwitter /></div>
          <div className="text-white border-[2px] border-white p-2 rounded-full aspect-square flex items-center justify-center"><GrFacebook /></div>
        </div>

      
    </div>
  )
}

export default Footer