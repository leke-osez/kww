import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { LandingPageBanner, Category } from "../components";
import { products as categories } from "../lib/dummy";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import BlogCard from "../components/blogCard";
import WhiteShirt from "../public/dummyProducts/tshirtwhite.png";
import Link from "next/link";

export default function Home() {
  // const [pageScroll,setPageScroll ] = useState(2)
  const element = useRef();

  // useEffect(()=>{
  //   window.scrollTo(0,pageScroll)
  // },
  // [])
  // useEffect(()=>{
  //   se
  // })
  return (
    <div className="bg-white w-full" ref={element}>
      <LandingPageBanner />

      {/* Introduction */}
      <div className="flex flex-col justify-center items-center px-2 py-5 leading-6 mt-3  w-[100%] ">
        <h1 className="text-center md:text-4xl text-3xl font-normal text-slate-800 ">
          Your Hair is Your Crown
        </h1>
        <div className="flex md:w-[70%] w-[80%] md:mt-7 mt-3 xl:text-xl  md:text-lg text-lg space-y-2 gap-3 text-center">
          <div className="flex items-start justify-center md:text-2xl">
            <FaQuoteLeft />
          </div>
          <p className="md:leading-8">
            Team has taken North America by storm! Our various esports teams
            have consistently won tournaments against some of the largest
            schools in North America.
          </p>
          {/* <p>
              St. Clair students can expect to get the most out of their time at
              college, both academically and socially. With a low
              student-to-faculty ratio, faculty is easily accessible and
              approachable to students. St. Clair is welcoming and friendly,
              with many clubs and extracurricular activities to engage students
              and help them get to know their peers. Our Saints Gaming esports
            </p>
            <p>
              Saints Varsity athletics offers tremendous opportunity to get
              involved in one of 16 sports on campus, from Basketball and Soccer
              to Curling, Softball, Baseball or Cross Country. Saints athletes
              have excelled on both the provincial and national stage with 81
              provincial titles and 6 national titles to their name. And as a
              varsity athlete, students receive $1,250 per sport semester. St.
              Clair recently purchased the AKO Football franchise
            </p> */}
          <div className="flex items-end justify-center md:text-2xl">
            <FaQuoteRight />
          </div>
        </div>
      </div>

      {/* Products show */}
      <div className="flex flex-col md:flex-row gap-3 w-full  relative md:mt-6 mt-3 xl:mt-9">
        <div className="md:border-r-[1px] flex gap-2 relative w-full px-4 py-2 bg-gray-200 h-[280px] xl:h-[500px]">
          <div className="h-[50%] w-[55%] bg-yellow-700/30 p-3"></div>
          <div className="h-[60%] w-[45%] bg-white p-3 mt-3"></div>
          <div className="absolute h-[60%] w-[40%] bg-gray-200 p-2 bottom-0 left-0 right-0 m-auto">
            <div className="w-full h-full bg-black"></div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-full md:w-[50%]  md:p-4">
          <h1 className=" text-lg md:text-xl xl:text-2xl font-semibold  p-2 ">
            Clair students can expect to get{" "}
          </h1>
          <p className="text-base xl:text-xl text-black/60">
            Saints Varsity athletics offers tremendous opportunity to get
            involved in one of 16 sports on campus, from Basketball and Soccer
            to Curling, Softball,
          </p>
        </div>
      </div>

      {/* <Link href="/products">
        <div className="w-full flex justify-center mt-4">
          <p className=" cursor-pointer border-black border-2 py-2 px-3 md:py-3 md:px-8 text-black text-lg md:text-xl font-semibold text-center w-fit ">
            SHOP NOW
          </p>
        </div>
      </Link> */}
      {/* Blog Show */}
      <div className="px-4 md:mt-9 mt-6 w-full flex flex-col items-center">
        <h1 className="w-full text-start md:mb-3 md:text-xl text-base font-medium">
          Read Blog
        </h1>
        <div className="grid grid-cols-2 grid-row-1 overflow-hidden sm:grid-cols-3 xl:grid-cols-6 w-full h-fit gap-3 ">
          
          {/* <div className="w-full sm:w-[90%] md:w-full aspect-square m-auto">
            <BlogCard
              imageUrl=''
              description="Start your wave journey"
            />
          </div>
          <div className="w-full sm:w-[90%] md:w-full aspect-square m-auto">
            <BlogCard
              imageUrl=''
              description="Start your wave journey"
            />
          </div>
          <div className="w-full sm:w-[90%] md:w-full aspect-square m-auto">
            <BlogCard
              imageUrl=''
              description="Start your wave journey"
            />
          </div>
          <div className="w-full sm:w-[90%] md:w-full aspect-square m-auto">
            <BlogCard
              imageUrl=''
              description="Start your wave journey"
            />
          </div>
          <div className="w-full sm:w-[90%] md:w-full aspect-square m-auto">
            <BlogCard
              imageUrl=''
              description="Start your wave journey"
            />
          </div>
          <div className="w-full sm:w-[90%] md:w-full aspect-square m-auto">
            <BlogCard
              imageUrl=''
              description="Start your wave journey"
            />
          </div> */}
        </div>

        {/* scroll dots */}
        <div></div>
      </div>
      <div className="w-full flex justify-center">

      <div className="w-full md:w-[80%] bg-teal-500/70 bg-ads min-h-[50px] md:h-fit flex flex-col justify-center items-center md:my-6 md:py-4 py-2 my-3 gap-3">
        <p className="text-center mb-2 md:text-2xl">
          Up your wave game by using our trusted products and see reviews
        </p>
        <Link href="/products">
          <button className="md:text-xl md:px-7 md:py-3 px-2 py-1 bg-black text-white rounded-full text-base md:font-semibold">
            Shop Now
          </button>
        </Link>
      </div>
      </div>

      {/* <div className='bg-inherit px-7 md:px-20'>
        {
          Object.keys(categories).map((products)=>(
            <Category products={categories[products]} title = {products} key ={products}/>
          ))

        }
      </div> */}
    </div>
  );
}


// export const getStaticProps = ()=>{
//   const bannerQuery = '*[_type == "banner"]'
//   const blog = '*[_type == "banner"]'

// }