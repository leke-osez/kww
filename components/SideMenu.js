import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { useStateContext } from "../context/StateContext";
import Link from "next/link";
import { AiFillCaretDown, AiOutlineDown } from "react-icons/ai";

const SideMenu = () => {
  const { setShowMenu } = useStateContext();
  return (
    <div className="pt-[50px]">
      <div className="md:none flex w-full justify-end py-4 px-4 ">
        <button
          type="button"
          className="  items-center "
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <RiCloseLine className="text-4xl font-semibold" />
        </button>
      </div>
      <div className="flex flex-col py-3 px-7 space-y-7 text-xl font-semibold">
        <div>
          <Link href={"/products"}>
            <div className="flex gap-2 items-center">
              <p>Products</p>
              <div onClick={() => setProductsMenu(false)}>
                <AiFillCaretDown />
              </div>
            </div>
          </Link>
          {
            <div className="pl-4 text-black/60 text-lg list-none flex flex-col gap-2 mt-2 font-normal">
              <li>Brushes</li>
              <li>Durags</li>
              <li>Wava-caps</li>
              <li>Hair Creams & Oil</li>
            </div>
          }
        </div>
        <Link href={"/blog"}>
          <p onClick={() => setShowMenu(false)} className="hover:text-black/50">
            Blog
          </p>
        </Link>
        <Link href={"/about"}>
          <p onClick={() => setShowMenu(false)} className="hover:text-black/50">
            About Us
          </p>
        </Link>
        <Link href={"/support"}>
          <p onClick={() => setShowMenu(false)} className="hover:text-black/50">
            Support
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
