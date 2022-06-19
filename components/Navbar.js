import React from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import {RiMenu2Line} from 'react-icons/ri'
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const {totalQuantity} = useStateContext()
  return (
    <div className='flex justify-between items-center bg-slate-900 px-4 md:px-10 py-4 relative z-10'>
        <div className=' md:hidden'>
          <RiMenu2Line className='text-white text-3xl '/>
        </div>
        <div >
            <p className='text-white text-xl font-bold font'>KWW</p>
        </div>

        {/* nav menu */}
        <div className='text-white text-xl gap-x-7 md:flex hidden contents-none'>
            <p className='hover:underline-offset-1 hover:underline'>Blog</p>
            <p className='hover:underline-offset-1 hover:underline'>Products</p>
            <p className='hover:underline-offset-1 hover:underline'>About Us</p>
            <p className='hover:underline-offset-1 hover:underline'>Support</p>
        </div>

        <button
          type='button'
          onClick={()=>{}}
          className = 'relative '
        >
            
            <AiOutlineShopping className='text-white text-4xl '/>
            <span className="cart-item-qty -top-2">{totalQuantity}</span>

        </button>
    </div>
  )
}

export default Navbar