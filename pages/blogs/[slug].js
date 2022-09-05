import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import { client, UrlFor } from "../../lib/client";

const Blog = ({  blogs, blogData }) => {
  const [blog, setBlog] = useState('') 

  const router = useRouter()
  const { slug } = router.query 
  const extractText = (textFile) => {
    if (textFile) {
      // const blob = new Blob([textFile],'text/html')
      const reader = new XMLSerializer().serializeToString(textFile);
      reader.readAsText(blob, "UTF-8");
      reader.onload = (evt) => {
        return evt.target.result;
      };
      reader.onerror = (evt) => {
        return ('error reading file')
    }
  };}

  const { image, title, content } = blogData
  useEffect(()=>{
 
    
  const xhr = new XMLHttpRequest(),
    method = "GET",
    url = `${content}`;

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  // In local files, status is 0 upon success in Mozilla Firefox
  if(xhr.readyState === XMLHttpRequest.DONE) {
    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      const HTML = xhr.responseText
      const BODY = HTML.match(/(<body)(.*)<\/body>/gm)[0]
      setBlog(BODY)
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
xhr.send();
  },[slug])
  return (
    <div className="w-full pt-[2.5rem] flex flex-col items-center ">
      {/* blog-banner */}
      {/* Header */}
      <header className="w-[80%] mb-4 mt-[3rem] md:mt-[3rem]">
        <h2 className="md:text-5xl text-3xl text-center uppercase text-slate-700">
          {title}
        </h2>
      </header>
      
      {image && (
        <div
          className={`relative w-full h-[290px] md:h-[400px] flex flex-col items-center justify-between md:py-7 py-3  `}
        >
          <img
            src={image ? UrlFor(image) : ""}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      
      {/* TODO: Get text from doc */}
      <main className=" sm:w-[80%] w-full flex flex-col para_spacing md:text-[1.1rem] text-black/80 text-base px-4 font-regular "   >
        <div dangerouslySetInnerHTML={{__html:blog}} />
      </main>
      
       {/* More blogs */}
      <section className="w-full mt-10 md:px-9 px-4">
        <h3 className="w-full text-start text-2xl text-slate-700/80">You may also like</h3>
        <div className="w-full  relative grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3">
            {blogs.map((blog) => {
              if (blog.slug.current === slug) return
              return(
              <div className="md:w-full aspect-square " key={blog._id}>
                <BlogCard
                  imageUrl={blog.image}
                  description={blog.title}
                  slug={blog.slug}
                />
              </div>
            )})}
          </div>
      </section>
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

export const getStaticProps = async ({ params: { slug } }) => {
  const blogQuery = `*[_type == 'blog' && slug.current == "${slug}"][0]{
    _id, image, title,"content": content.asset->url
  }`;
  const blogsQuery = `*[_type == "blog" ] {
    title, image, title, slug, _id, 
  }`;
  const blogs = await client.fetch(blogsQuery);
  const blogData = await client.fetch(blogQuery);

  return { props: { blogData, blogs } };
};


export default Blog;
