import React, { useEffect, useState } from "react";
import { client, UrlFor } from "../../lib/client";

const Blog = ({ blogData: { image, title, content } }) => {
  const [blog, setBlog] = useState('') 
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
      console.log(BODY)
      setBlog(BODY)
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
xhr.send();
  },[])
  return (
    <div className="w-full pt-[2.5rem] flex flex-col items-center ">
      {/* blog-banner */}
      {image && (
        <div
          className={`relative w-full h-[290px] md:h-[400px] flex flex-col items-center justify-between md:py-7 py-3  `}
        >
          <img
            src={image ? UrlFor(image) : ""}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {/* Header */}
      <header className="w-[80%] mb-4">
        <h2 className="md:text-4xl text-3xl text-center uppercase text-black/90 text-slate-700">
          {title}
        </h2>
      </header>
      {/* TODO: Get text from doc */}
      <main className="w-[60%] flex flex-col para_spacing md:text-[1.1rem] text-black/80 text-base px-4 font-regular "   >
        <div dangerouslySetInnerHTML={{__html:blog}} />
      </main>
      
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

export const getStaticProps = async ({ params: { slug } }) => {
  const blogQuery = `*[_type == 'blog' && slug.current == "${slug}"][0]{
    _id, image, title,"content": content.asset->url
  }`;
  // const blogsQuery =  `*[_type == 'blog']`

  const blogData = await client.fetch(blogQuery);

  return { props: { blogData } };
};
export default Blog;
