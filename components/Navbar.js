import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { useStateContext } from "../context/StateContext";
import Link from "next/link";
import Logo from "../public/logo.png"
import Image from "next/image";

const Navbar = () => {
  const { totalQuantity, setShowCart, setShowMenu } = useStateContext();
  return (
    <div className="flex justify-between items-center bg-slate-900/80 px-4 sm:px-5 md:px-24 py-3 md:py-4 relative ">
      <button
        className=" sm:hidden"
        onClick={() => {
          setShowMenu((prev) => !prev);
        }}
      >
        <RiMenu2Line className="text-white text-2xl md:text-3xl " />
      </button>
      <div className="flex items-center h-full cursor-pointer">
        <Link href={"/"} >
          <div className="flex items-center ">

          <div className="w-[3rem] h-[3rem]">
          <Image src = {Logo} alt = 'kww_logo' /> 
          </div>
          <p className="text-white text-lg font-bold font">KWW</p>
          </div>
        </Link>
      </div>

      {/* nav menu */}
      <div className="text-white sm:text-base md:text-lg md:mr-5 xl:mr-7 md:gap-x-7 sm:gap-x-3 sm:flex hidden contents-none">
        <Link href="/blog">
          <p className="hover:underline-offset-1 hover:underline cursor-pointer">
            Blog
          </p>
        </Link>
        
          <div className="h-fit relative w-fit">
          <Link href="/categories/all">
            <p className="peer hover:underline-offset-1 hover:underline cursor-pointer">
              Products
            </p>
           </Link>

            <div className="hidden shadow-lg bg-white peer-hover:flex hover:flex absolute top-[100%] pl-4 text-black/60 text-lg list-none flex-col gap-2 min-w-[200px] font-normal">
              <li className = 'hover:text-slate-400 hover:underline hover:underline-offset-1'><Link href={"/categories/brush"} >Brushes</Link></li>
              <li className = 'hover:text-slate-400 hover:underline hover:underline-offset-1'><Link href={"/categories/durag"}>Durags</Link></li>
              <li className = 'hover:text-slate-400 hover:underline hover:underline-offset-1'><Link href={"/categories/wavecap"}>Wava-caps</Link></li>
              <li  className = 'hover:text-slate-400 hover:underline hover:underline-offset-1'><Link href ={"/categories/creamAndOil"}>Hair Creams & Oil</Link></li>
              <li className = 'hover:text-slate-400 hover:underline hover:underline-offset-1'><Link href ={"/categories/shampoo"}>Shampoo</Link></li>

            </div>
          </div>
        <Link href="/about">
          <p className="hover:underline-offset-1 hover:underline cursor-pointer">
            About Us
          </p>
        </Link>
        <Link href="/support">
          <p className="hover:underline-offset-1 hover:underline cursor-pointer">
            Support
          </p>
        </Link>
      </div>

      <Link type="button" href={"/cart"}>
        <div className="relative cursor-pointer">
          <AiOutlineShopping className="text-white text-2xl md:text-4xl " />
          <span className="cart-item-container -top-2 p-[0.4px] ">
            <div className="cart-item-qty">{totalQuantity}</div>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
