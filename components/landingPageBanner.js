import Image from "next/image";
import React from "react";
import hairOil from "../public/landingPage/hair oil-1.png";
import hairKit from "../public/landingPage/wave_kit_banner-1.png";

import Link from "next/link";

const LandingPageBanner = () => {
  return (
    <div className=" w-full h-[40rem] sm:h-fit md:h-[40rem] xl:h-[45rem] 2xl:h-[70rem]  relative overflow-x-hidden">
      <div className="left-0 top-0 h-[100%] bg-yellow-800/30 w-full sm:pt-[6rem] px-4 flex flex-col sm:flex-row md:gap-[4rem] justify-center items-start  ">
        <div className=" sm:w-[50%] max-w-[500px] w-full flex flex-col justify-center md:justify-start items-center px-3">
          <h1 className=" text-4xl  md:text-5xl xl:text-[5rem] 2xl:text-[7rem] w-full text-center sm:text-start carter-one leading-10">
            Unlock your Cut, Unlock your King
          </h1>
          <p className=" w-full hidden sm:flex mt-8 md:mt-10 md:text-xl  relative  flex-wrap flex text-center sm:text-start">
            Get the best hair products from all around the world that fits your
            budget.
          </p>
        </div>
        <div className="w-full sm:w-[50%] relative ">
          <div className=" flex justify-center sm:justify-start w-full sm:px-4 py-2 h-[280px] xl:h-[500px]">
            <div className="h-[50%] w-[70%] sm:w-[60%] sm:-mt-[3rem] p-3 pr-0">
            <Image src = {hairKit} alt = 'landingBanner1' layout="intrinsic"/>

            </div>
            {/* <div className="h-[60%] w-[45%]  p-3 mt-3">

            </div> */}
            <div className=" h-[60%] w-[90%] hidden sm:flex -mt-[4rem] xl:mt-0  -mx-[10rem] pl-0 p-2 ">
              <div className="w-full h-full ">
              <Image src = {hairOil} alt = 'landingBanner1'/>

              </div>
            </div>
          </div>
          
        </div>
      </div>

      <Link href="/categories/all">
        <p className=" cursor-pointer bg-slate-600 border-black h-fit border-[.3px] py-2 px-3 md:py-3 md:px-8 text-white text-lg md:text-xl font-semibold text-center min-w-fit max-w-[200px] absolute bottom-10 left-0 right-0 m-auto">
          SHOP NOW
        </p>
      </Link>
    </div>
  );
};

export default LandingPageBanner;
