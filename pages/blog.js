import React from "react";
import BlogBanner from "../components/blogBanner";
import BlogCard from "../components/blogCard";
import WhiteShirt from "../public/dummyProducts/tshirtwhite.png";
import Link from 'next/link'

const blog = () => {
  return (
    <div>
      <BlogBanner
        title="How to pick an outfit for your date"
        backgroundColor={"bg-red-300"}
      />
      <div className="md:p-4 p-2  flex flex-col items-center gap-2 ">
        
        {/* Blog Container 1 */}

        <div className="px-4 md:px-7 w-full flex flex-col items-center">
          <p className="text-start w-full md:text-2xl text-xl font-normal text-slate-600 mb-2 md:mb-4">
            Top Reads
          </p>
          <div className="grid w-full md:w-[95%] sm:grid-cols-4 sm:grid-rows-2 grid-cols-2  grid-rows-4 md:mt-6 md:h-fit h-fit md:items-start gap-2 ">
            {/* Big  card */}
            <div className="flex-2 aspect-square  col-span-2 row-span-2 ">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>

            {/* Small cards*/}
            <div className="md:w-full aspect-square ">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>
            <div className=" w-full aspect-square">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>

            <div className=" w-full  aspect-square">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>
            <div className=" w-full  aspect-square">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>
          </div>
        </div>

        {/* Inhouse Ads */}
        <div className="w-full md:w-[80%] bg-teal-500/70 min-h-[50px] md:h-fit flex flex-col justify-center items-center md:my-6 md:py-4 py-2 my-3 gap-3">
          <p className="text-center mb-2 md:text-3xl">Up your wave game by using our trusted products and see reviews</p> 
          <Link href = '/products'><button className="md:text-2xl md:px-7 md:py-3 px-2 py-1 bg-black text-white rounded-full text-base md:font-semibold">Shop Now</button></Link>
        </div>

        {/* Blog Container 2 */}
        <div className="relative w-full flex flex-col mt-3">
          <p className="text-start relative md:text-2xl text-lg font-normal text-slate-600 mb-4">
            Content for Kings
          </p>
          <div className="w-full md:h-[200px] h-[300px] relative grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3">
            <div className="w-full  flex items-center justify-center aspect-square">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>
            <div className=" w-full  flex items-center justify-center aspect-square">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>
            <div className=" w-full  flex items-center justify-center aspect-square">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>
            <div className=" w-full  flex items-center justify-center aspect-square">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>
            <div className=" w-full  flex items-center justify-center aspect-square">
              <BlogCard
                imageUrl={WhiteShirt}
                description="Start your wave journey"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
