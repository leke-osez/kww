import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";
import SideModal from "./SideModal";
import { useStateContext } from "../context/StateContext";
import SideMenu from "./SideMenu";

const Layout = ({ children }) => {
  const {showMenu} = useStateContext()
  return (
    <div className="">
      <Head>
        <title>KWW</title>
      </Head>
      <header className="relative">
        <div >       
        <div className="fixed top-0 w-full z-[100]"><Navbar /></div>
        </div>
        <div className="relative">
          {showMenu && <SideModal><SideMenu/></SideModal>}
        </div>
      </header>

      <main className={`${showMenu ? 'overflow-hidden': ''}`} >{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;