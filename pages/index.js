import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { LandingPageBanner, Category, Product } from "../components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import BlogCard from "../components/BlogCard";
import hairModel1 from "../public/landingPage/hair_model1.png";
import hairModel2 from "../public/landingPage/hair_model2.png";
import rainbow from "../public/landingPage/wave_top_view.png";
import SlashedPrice from "../components/SlashedPrice";
import Link from "next/link";
import { client } from "../lib/client";
import Image from "next/image";
import money from "../lib/moneyString";
import clean from "../public/landingPage/clean.webp";
import trusted from "../public/landingPage/products.webp";
import expertise from "../public/landingPage/true_expertise.webp";

export default function Home({ blogData, productsData }) {
  // const [pageScroll,setPageScroll ] = useState(2)
  const element = useRef();
  // useEffect(()=>{
  //   window.scrollTo(0,pageScroll)
  // },
  // [])
  
  return (
    <div className="bg-white w-full" ref={element}>
      <LandingPageBanner />

      {/* Introduction */}
      <div className="flex flex-col justify-center items-center px-2 py-5 leading-6 mt-[3rem] md:mt-[6rem]  w-[100%] ">
        <h1 className="text-center md:text-4xl text-3xl font-normal text-slate-800 ">
          Your Hair is Your Crown
        </h1>
        <div className="flex md:w-[60%] w-[80%] md:mt-7 mt-3 xl:text-xl  md:text-lg text-lg space-y-2 gap-3 text-center">
          <div className="flex items-start justify-center md:text-2xl">
            <FaQuoteLeft />
          </div>
          <p className="md:leading-8">
            Dear Kings, we at KWW believe that your hair is your crown and
            should be treated with uttermost care.
          </p>

          <div className="flex items-end justify-center md:text-2xl">
            <FaQuoteRight />
          </div>
        </div>
      </div>

      {/* Products show */}
      <div className="flex flex-col md:flex-row gap-3 w-full  relative md:mt-[6rem]  mt-[3rem] ">
        <div className="md:border-r-[1px] flex gap-2 relative w-full px-4 py-2  h-fit xl:h-fit">
          <div className="relative h-[50%] w-[55%] bg-yellow-700/30 p-3">
            <Image
              src={hairModel1}
              alt="landingBanner1"
              layout="responsive"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="relative h-[60%] w-[45%] bg-gray-900/70 p-3 mt-3">
            <Image
              src={rainbow}
              alt="landingBanner2"
              layout="responsive"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="absolute h-[60%] w-[40%] bg-gray-200 p-2 bottom-0 left-0 right-0 m-auto">
            <div className="w-full h-full bg-black overflow-hidden ">
              <Image
                src={hairModel2}
                alt="landingBanner1"
                layout="responsive"
                style={{ width: "100%", height: "100%", position: "relative" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-full md:w-[50%]  md:p-4">
          <h1 className=" text-lg md:text-xl xl:text-2xl font-semibold  p-2 ">
            Start your wave journey{" "}
          </h1>
          <p className="text-base xl:text-xl text-black/60 px-2">
            <span className="font-medium text-black/80">A</span>ll great things
            start from somewhere, no matter how small.{" "}
            <span className="font-medium text-black/80">O</span>cean waves are
            made of little drops.
            <span className="font-medium text-black/80"> S</span>tarting your
            wave journey can be daunting or might seem like a really &quot;high tide&quot;
            but here in KingzWithWaves, we show you how to surf those tides
            easily.
            <span className="font-medium text-black/80"> W</span>e give the best
            tips backed up with the ultimate curated products to make your
            transition easy and if you have been in the game, we will up your
            game.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full md:w-[80%] bg-teal-500/70 bg-ads min-h-[50px] md:h-fit flex flex-col justify-center items-center md:my-6 md:py-4 py-2 my-3 gap-3">
          <p className="text-center mb-2 md:text-2xl">
            Up your wave game by using our Quality and Trusted products 
          </p>
          <Link href="/products">
            <button className="md:text-xl md:px-7 md:py-3 px-2 py-1 bg-black text-white rounded-full text-base md:font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="w-full mt-[4rem] bg-gray-500/30 flex flex-col items-center py-3 md:py-7">
        <h3 className="text-3xl font-light mb-3">BRAND ETHOS</h3>
        <div className="md:w-[90%] w-[90%] sm:w-[70%] grid  md:grid-cols-3 gap-3">
          {/* NATURAL */}
          <div className="bg-white  h-full w-[full] p-[2rem] flex flex-col items-center">
            <div className=" w-full mb-2">
              <div className="w-[3rem]">
                <Image
                  src={clean}
                  alt="natural"
                  width="100%"
                  height="100%"
                  style={{ color: "black" }}
                />
              </div>
              <h4 className="text-xl">Natural products</h4>
            </div>
            <p>
              We at KWW are green and environmental friendly so we have options for organic products.
            </p>
          </div>

          {/* TRUSTED */}
          <div className="bg-white h-full w-[full] p-[2rem] flex flex-col items-center">
            <div className=" w-full mb-2">
              <div className="w-[3rem]">
                <Image
                  src={trusted}
                  alt="natural"
                  width="100%"
                  height="100%"
                  style={{ color: "black" }}
                />
              </div>
              <h4 className="text-xl">Quality and Affordable Products</h4>
            </div>
            <p>
              We serve you nothing else but superior quality wave products all round and we know our Kings budgets vary so we got you covered with alternatives.
            </p>
          </div>

          {/* EXPERTISE */}
          <div className="bg-white h-full  w-[full] p-[2rem] flex flex-col items-center">
            <div className=" w-full mb-2">
              <div className="relative w-[3rem] ">
                <Image
                  src={expertise}
                  alt="natural"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  style={{ color: "black" }}
                />
                
              </div>
              <h4 className="text-xl">True Expertise</h4>
            </div>
            <p>
              Through years of research and experience, we have created formulas serving as catalyst to speed up your wave transition process
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className=" w-full px-3 xl:px-6 mt-9 flex flex-col xl:items-center">
        <div></div>
        <h2 className=" text-black/70 text-lg xl:text-2xl md:font-semibold mt-3 mb-2 text-start w-full">
          Top products{""}
        </h2>
        <div className="gap-4 flex p-4 flex-row  items-start justify-start xl:justify-center overflow-x-auto md:max-w-[100%]  w-full">
          {productsData.map((item, i) => (
            <Product
              key={item._id}
              Link={Link}
              Image={Image}
              SlashedPrice={SlashedPrice}
              item={item}
              money={money}
            />
          ))}
        </div>
      </div>

      {/* Blog Show */}
      <div className="px-4 md:mt-9 mt-6 w-full flex flex-col items-center">
        <h1 className="w-full text-black/70 text-start md:mb-3 md:text-xl text-base font-medium">
          Hair tips you should read
        </h1>
        <div className="grid grid-cols-2 grid-row-1 overflow-hidden sm:grid-cols-3 xl:grid-cols-5 w-full h-fit gap-3 ">
          {blogData.map((blog) => 
            <div className="md:w-full aspect-square " key={blog._id}>
              <BlogCard
                imageUrl={blog.image}
                description={blog.title}
                slug={blog.slug}
              />
            </div>
          )}
        </div>

        {/* scroll dots */}
        <div></div>
      </div>

     
    </div>
  )
}

export const getServerSideProps = async () => {
  const blogQuery = `*[_type == "blog" ] {
    title, image, slug, _id
  }`;
  const productsQuery = '*[_type == "item"]';
  const productsData = await client.fetch(productsQuery);
  const blogData = await client.fetch(blogQuery);

  return {
    props: { blogData, productsData },
  };
};
