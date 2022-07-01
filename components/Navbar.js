import React from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import {RiMenu2Line} from 'react-icons/ri'
import { useStateContext } from '../context/StateContext';
import Link from 'next/link'

const Navbar = () => {
  const {totalQuantity, setShowCart, setShowMenu} = useStateContext()
  return (
    <div className='flex justify-between items-center bg-slate-900 px-4 sm:px-5 md:px-24 py-3 md:py-4 relative '>
        <button 
          className=' sm:hidden'
          onClick = {()=>{setShowMenu(true)}}
        >
          <RiMenu2Line className='text-white text-2xl md:text-3xl '/>
        </button>
        <div className='flex items-center h-full cursor-pointer' >
            <Link href={'/'} className='flex items-center h-full'><p className='text-white text-lg font-bold font'>KWW</p></Link>
        </div>

        {/* nav menu */}
        <div className='text-white sm:text-base md:text-xl gap-x-7 sm:flex hidden contents-none'>
            <Link href = '/blog'><p className='hover:underline-offset-1 hover:underline cursor-pointer'>Blog</p></Link>
            <Link href= '/products'><p className='hover:underline-offset-1 hover:underline cursor-pointer'>Products</p></Link>
            <Link href = '/about'><p className='hover:underline-offset-1 hover:underline cursor-pointer'>About Us</p></Link>
            <Link href = '/support'><p className='hover:underline-offset-1 hover:underline cursor-pointer'>Support</p></Link>
        </div>

        <Link
          type='button'
          href={'/cart'}
          
        >
            <div className = 'relative cursor-pointer'>
            
            <AiOutlineShopping className='text-white text-2xl md:text-4xl '/>
            <span className="cart-item-container -top-2 p-[0.4px] "><div className='cart-item-qty'>{totalQuantity}</div></span>
            </div>

        </Link>
    </div>
  )
}

export default Navbar