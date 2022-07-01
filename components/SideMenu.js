import React from 'react'
import { RiCloseLine } from 'react-icons/ri';
import {  useStateContext } from '../context/StateContext';
import Link from 'next/link'

const SideMenu = () => {
    const {setShowMenu} = useStateContext()
  return (
    <div>
        <div className = 'md:none flex w-full justify-end py-4 px-4'>

        <button
          type="button"
          className="  items-center "
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <RiCloseLine className="text-4xl font-semibold"/>
        </button>
        </div>
        <div className='flex flex-col py-3 px-7 space-y-7 text-xl font-semibold'>
          <Link href={'/products'}><p  onClick = {()=> setShowMenu(false)} className = 'hover:text-black/50'>Products</p></Link>
          <Link href={'/blog'} ><p onClick = {()=> setShowMenu(false)} className = 'hover:text-black/50'>Blog</p></Link>
          <Link href={'/about'} ><p onClick = {()=> setShowMenu(false)} className = 'hover:text-black/50'>About Us</p></Link>
          <Link href={'/support'} ><p onClick = {()=> setShowMenu(false)} className = 'hover:text-black/50'>Support</p></Link>

        </div>
    </div>
  )
}

export default SideMenu