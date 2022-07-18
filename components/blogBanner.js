import React from "react";
import Image from "next/image";
import wavePicBanner from "../public/wave-blog-banner.jpg";

const BlogBanner = ({ title, backgroundColor, content }) => {
  return (
    <div
      className={`relative w-full h-[320px] md:h-[500px] flex flex-col items-center justify-between py-7 px-4 bg-slate-700 blog-image `}
    >
      <div className="md:mt-[90px] mt-[30px]">
        <h1 className="text-center text-4xl font-semibold text-white ">
          {title}
        </h1>
        <div className="text-center text-xl text-white mt-20 font-semibold "><p className="rotate-90">{content}</p></div>
      </div>
      
      {/* <button className='px-3 py-2 text-lg border-[1px] text-white'> Read more</button> */}
    </div>
  );
};

export default BlogBanner;
