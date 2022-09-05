import React from "react";
import BlogBanner from "../components/blogBanner";
import BlogCard from "../components/BlogCard";
import WhiteShirt from "../public/dummyProducts/tshirtwhite.png";
import Link from "next/link";
import { client } from "../lib/client";
import Image from "next/image";
import waveJourney from "../public/blog/waving_journey.png";

const blog = ({ blogData }) => {
  return (
    <div>
      <BlogBanner
        title="Get Hair Tips"
        backgroundColor={"bg-slate-900 "}
        content="Stay Wavyy"
      />
      <div className="md:p-4 p-2 mt-12 flex flex-col items-center gap-2 ">
        {/* WAVING JOURNEY */}
        <div className="flex flex-col items-center md:gap-6 gap-4">
          <div className="flex flex-col gap-3 md:w-[70%] px-3">
            {/* INTRODUCTION */}
            <span>
              <h3 className="text-5xl text-slate-700 font-medium w-full text-center mb-4">WHY YOU NEED WAVES</h3>
              <p>
                If you are on this page, you are either a curious reader,
                looking to step-up your already good game or eager to start you
                wave journey
              </p>
              <p>
                Well whatever category you fall under, this piece is for you
              </p>
              <p>
                A lot of people ask us here at KWW, besides the aesthetics what
                does waving add to me
              </p>
            </span>

            {/* POINT 1 */}
            <section className="flex gap-2">
              <p className="font-bold text-xl">1.</p>
              <span>
                <h3 className="font-bold  text-xl">Prevents baldness:</h3>
                <p>
                  The process your hair passes through during your waving stage
                  strengthens your hair. Unkempt hair leads to hair knots which
                  affects hair follicles(pores)
                </p>
                <p>
                  Constant waving stretches your hair so the curl lies parallel
                  against each other, this phenomenon leads to the elegant wavyy
                  appearance
                </p>
                <p>
                  Hair products are also food for your hair because unhealthy
                  hair damages your pores.
                </p>
              </span>
            </section>

            {/* POINT 2 */}
            <section className="flex gap-2">
              <p className="font-bold  text-xl">2.</p>
              <span>
                <h3 className="font-bold  text-xl">Stress Relief:</h3>
                <p>
                  Brushing your hair is a certified way to release the
                  {" day's"} stress, the bristles we sell are designed to give
                  your head that caressing feel,{" "}
                </p>
                <p>
                  The continouos motion or stroke of the hand relaxes the mind.
                </p>
              </span>
            </section>

            {/* POINT3 */}
            <section className="flex gap-2">
              <p className="font-bold  text-xl">3.</p>
              <span>
                <h3 className="font-bold  text-xl">Respect and Attention:</h3>
                <p>
                  Wavers are unique, they are not considered as mere mortals,
                  they have transcended into the Poseidon god state.
                </p>
                <p>
                  But seriously though, we have heard testimonies of how people
                  gained respect at work, amongst their peers, and if you are a
                  guy,among the ladies too because ladies love men with style.
                </p>
              </span>
            </section>

            {/* POINT4 */}
            <section className="flex gap-2">
              <p className="font-bold  text-xl">4.</p>
              <span>
                <h3 className="font-bold  text-xl">Class and Style:</h3>
                <p>
                  Why be ordinary? when you can be King oozing with style and
                  class,{" "}
                </p>
                <p>
                  Class is earned, and having waves is 100% guaranteed class.
                </p>
              </span>
            </section>
          </div>
        </div>

        {/* Blog Container 1 */}

        <div className="sm:px-4 mt-[3rem] md:px-7 w-full flex flex-col items-center">
          <p className="text-start md:w-[80%] md:text-2xl text-xl font-normal text-slate-600 mb-2 ">
            Popular
          </p>
          <div className="grid w-[90%] md:w-[80%] sm:grid-cols-4 sm:grid-rows-2 grid-cols-2  grid-rows-4 md:mt-6 md:h-fit h-fit md:items-start gap-2 ">
            {/* Big  card */}
            <div className="flex-2 aspect-square  col-span-2 row-span-2 ">
              <BlogCard
                imageUrl={blogData[0].image}
                description={blogData[0].title}
                slug={blogData[0].slug}
              />
            </div>

            {/* Small cards*/}
            {blogData.slice(1, 6).map((blog) => (
              <div className="md:w-full aspect-square " key={blog._id}>
                <BlogCard
                  imageUrl={blog.image}
                  description={blog.title}
                  slug={blog.slug}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Inhouse Ads */}
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

        {/* Blog Container 2 */}
        <div className="relative w-full flex flex-col mt-3">
          <p className="text-start relative md:text-2xl text-lg font-normal text-slate-600 mb-4">
            Content for Kings
          </p>
          <div className="w-full  relative grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3">
            {blogData.map((blog) => (
              <div className="md:w-full aspect-square " key={blog._id}>
                <BlogCard
                  imageUrl={blog.image}
                  description={blog.title}
                  slug={blog.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const blogQuery = `*[_type == "blog" ] {
    title, image, title, slug, _id
  }`;
  const blogData = await client.fetch(blogQuery);

  // const bannerQuery = '*[_type == "banner"]'
  // const bannerData =await client.fetch(bannerQuery)

  return {
    props: { blogData },
  };
};

export default blog;
