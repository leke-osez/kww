import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import {SiHandshake} from 'react-icons/si';
import {GiCheckMark} from 'react-icons/gi'

const about = () => {
  return (
    <div className="md:px-[10%] bg-gray-500/10 sm:px-8 px-4 py-5 pt-20 w-full flex flex-col gap-3 items-center">
      {/* What we do */}
      <div className="text-center flex flex-col gap-5 md:gap-10 items-center">
        <div className="w-fit">
          <p className="font-semibold md:text-3xl text-2xl">WHAT WE DO</p>
          <div className="bg-teal-400 rounded-full w-[30%] sm:w-[40%] h-[0.4rem] bg-ads"></div>
        </div>
        <p className="md:text-lg text-base">
          Kings With Waves, shortened as KWW is a platform where we offer
          top-notch products and services on hair waving and styling. We believe
          your hair is your crown and should be treated as such. We offer
          premium tips on hair styling to ease your transition process if you are
          new to it or a way to level up if you have been in the game. We
          currently deliver across Nigeria
        </p>
        {/* Products and Services*/}
        <div>
          {/* <p className="font-semibold md:text-2xl text-xl mb-3 text-black/70">
            Products et Services
          </p> */}
          <div className="flex justify-center items-end w-full gap-3 md:gap-7 flex-wrap text-black text-6xl">
            <div className="w-[200px]  aspect-square md:w-[400px] py-3  bg-white rounded-md flex flex-col items-center">
              {/* products */}
              <AiOutlineShoppingCart />
              <div className="w-full relative h-10  flex items-center justify-center bg-inherit">
                <div className="absolute left-0 right-0 bottom-0 top-0 m-auto h-2 rounded-full line-grad-col " />
                <p className="text-center relative h-auto w-auto m-0 leading-none px-3 bg-inherit text-xl font-semibold text-black/70 capitalize">
                  Products
                </p>
                
              </div>
              <div className="w-full md:text-lg text-base px-3 md:px-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Wave Brushes</p></div>
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Durags</p></div>
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Hair Cream & Oil</p></div>
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Shampoo</p></div>
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Wave caps</p></div>
                </div>
            </div>

            <div className="w-[200px] aspect-square md:w-[400px] py-3 bg-white rounded-md flex flex-col items-center">
              {/* services */}
              <SiHandshake/>
              <div className="w-full relative h-10  flex items-center justify-center bg-inherit">
                <div className="absolute left-0 right-0 bottom-0 top-0 m-auto h-2 rounded-full line-grad-col " />
                <p className="text-center relative h-auto w-auto m-0 leading-none px-3 bg-inherit text-xl font-semibold text-black/70 capitalize">
                  Services
                </p>
              </div>
              <div className="w-full md:text-lg text-base px-3 md:px-5 flex flex-col gap-3 text-start">
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Wave tutorials</p></div>
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Hair tips</p></div>
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Periodic wave checks</p></div>
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Wave community</p></div>
                  
                </div>
            </div>

            <div className="w-[200px] aspect-square  md:w-[400px] py-3  bg-white rounded-md flex flex-col items-center">
              {/* delivery */}
              <TbTruckDelivery />
              <div className="w-full relative h-10  flex items-center justify-center bg-inherit">
                <div className="absolute left-0 right-0 bottom-0 top-0 m-auto h-2 rounded-full line-grad-col " />
                <p className="text-center relative h-auto w-auto m-0 leading-none px-3 bg-inherit text-xl font-semibold text-black/70 capitalize">
                  Delivery
                </p>
              </div>
              <div className="w-full md:text-lg text-base px-3 md:px-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Quick Delivery</p></div>
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Affordable plans</p></div>
                  <div className="flex items-center gap-3"><GiCheckMark className="md:text-2xl text-green-600"/><p>Refund Policies</p></div>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
