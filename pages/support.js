import React from "react";
// import customerCare from '../public/customer_care.jpg';
import customerCare from "../public/customer_care2.jpg";
import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";

const support = () => {
  return (
    <div className="w-full pt-20 px-10 bg-gray-500/10 flex flex-col gap-3 ">
      <div className="w-full md:w-[70%] m-auto sm:grid grid-cols-2 xl:py-auto bg-white md:gap-x-20 p-3 md:p-5">
        <div className="  xl:w-[400px]  w-full">
          <Image
            src={customerCare}
            alt="customer care"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="xl:mt-20 w-full md:w-[100%] ">
          <p className="xl:text-3xl md:text-xl text-xl  font-semibold  text-start mb-2 ">
            Hi there! We love to hear from you, how can we help?
          </p>
          <div className="bg-teal-400 rounded-full w-[30%] sm:w-[40%] h-[0.4rem] bg-ads"></div>
          <p className="text-black/80">
            See options on how you can contact us, We are always ready to help.
          </p>
        </div>
      </div>
      <form className="flex flex-col  w-[100%] md:w-[70%] m-auto p-4 bg-white gap-2 ">
        <p className="md:text-xl font-semibold">Compose your Message</p>
        <input
          className=" w-[200px] sm:w-[300px] h-7 border-[3px]"
          placeholder="Your name"
        />
        <input
          className=" w-[200px] sm:w-[300px]  h-7 border-[3px]"
          placeholder="Your email"
        />
        <input />
        <div className="flex items-end justify-start gap-3">
          <textarea
            className="border-[3px] w-[300px] h-[100px] md:w-[500px] md:h-[150px]"
            placeholder="Write a message"
          />
          <button className="py-2 px-3 md:py-2 md:px-5 bg-green-500 text-white text-center rounded-full font-semibold">
            Send
          </button>
        </div>
      </form>

      <div className="xl:text-4xl text-3xl  w-full md:w-[70%] m-auto p-4 bg-white gap-2">
        <p className="md:mt-7 md:text-xl  text-base font-semibold">Reach us via:</p>
        

        <div className=" flex flex-col gap-4 items-start mt-3">
          <div className="flex xl:gap-7 gap-3 items-center">
            <RiWhatsappFill className="text-green-700" />
            <p className="xl:text-2xl md:text-xl text-base">+2348177769733</p>
          </div>
          <div className="flex xl:gap-7 gap-3 items-center">
            <FaPhoneAlt />
            <p className="xl:text-2xl md:text-xl text-base">+2348177769733</p>
          </div>
          <div className="flex xl:gap-7 gap-3 items-center">
            <IoIosMail />
            <p className="xl:text-2xl md:text-xl text-base">foo@gmail.com</p>
          </div>
        </div>
        <div className=" flex gap-4 flex-wrap xl:text-5xl justify-center mt-3 mb-4 ">
          <div><AiFillInstagram /></div>
          <div className="text-blue-300"><BsTwitter /></div>
          <div className="text-blue-700"><GrFacebook /></div>
        </div>
      </div>
    </div>
  );
};

export default support;
