import React from "react";
import textReader from "any-text";
import { client, UrlFor } from "../../lib/client";

const Blog = ({blogData:{ image, title, content }}) => {
  console.log(image)
  return (
    <div className="w-full pt-[2.5rem]">
      {/* blog-banner */}
      {image && (
        <div
          className={`relative w-full h-[290px] md:h-[400px] flex flex-col items-center justify-between md:py-7 py-3  `} 
        >
          <img src={image ? UrlFor(image): ''} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {/* Header */}
      <header className="w-full">
        <h2 className="md:text-3xl text-3xl text-center uppercase text-black/90">{title}</h2>
      </header>
      {/* TODO: Get text from doc */}
      <main className="w-[90%]">
        {/* <p>
          {textReader.getText(content.asset).then((result) => {
            return result;
          })}
        </p> */}
      </main>
      {/* <div className="absolute xl:grid hidden top-[50%] w-[95%] md:top-[35%] md:w-[70%] h-[55%] md:h-[70%] grid-cols-2 rounded-lg shadow-2xl">
        <Image
          src={wavePicBanner}
          alt="wavyy"
          width="50%"
          height="100%"
          layout="responsive"
          className="rounded-tl-xl rounded-bl-xl"
        />
        <div className="h-full flex-1 rounded-tr-xl rounded-br-xl bg-gray-100 p-7 relative">
          <div className="flex-1 max-h-[70%] overflow-hidden mb-2">
            <p className="text-lg md:text-xl text-black mb-2 md:mb-3 font-semibold">
              Lorem Ipsum
            </p>
            <p className="text-base text-black/80">
              Saints Varsity athletics offers tremendous opportunity to get
              involved in one of 16 sports on campus, from Basketball and Soccer
              to Curling, Softball,
              Saints Varsity athletics offers tremendous opportunity to get
              involved in one of 16 sports on campus, from Basketball and Soccer
              to Curling, Softball,
              Saints Varsity athletics offers tremendous opportunity to get
              involved in one of 16 sports on campus, from Basketball and Soccer
              to Curling, Softball,
            </p>
          </div>
          <button className=" m-auto h-fit px-3 md:py-2 py-1 text-lg border-2 md:border-4 font-semibold border-slate-900">
            {" "}
            Read more
          </button>
        </div>
      </div> */}
      {/* More blogs */}
      <section></section>
    </div>
  );
};

export const getStaticPaths = async () => {
  const blogQuery = `*[_type == 'blog'] {slug{current}}`;
  const blogData = await client.fetch(blogQuery);

  const blogPath = blogData.map((blog) => {
    return {
      params: { slug: blog.slug.current },
    };
  });

  return {
    paths: blogPath,
    fallback: "blocking",
  };
};

export const getStaticProps = async({params:{slug}})=>{
    const blogQuery =  `*[_type == 'blog' && slug.current == "${slug}"][0] `
    // const blogsQuery =  `*[_type == 'blog']`

    const blogData = await client.fetch(blogQuery)

    return {props: {blogData}}


}
export default Blog;
