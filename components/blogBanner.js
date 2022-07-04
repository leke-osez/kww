import React from 'react';
import Image from 'next/image';
import wavePicBanner from '../public/wave-blog-banner.jpg'

const BlogBanner = ({title, backgroundColor, content}) => {
  return (
    <div className={`relative w-full h-[320px] md:h-[500px] flex flex-col items-center justify-between py-7 px-4  ${backgroundColor} `} >
     
        <div className='md:mt-[90px] mt-[30px]'>

        <h1 className='text-center text-4xl font-semibold text-white '>{title}</h1>
        <div>
            {content}
        </div>
        </div>
        <div className='absolute top-[50%] w-[95%] md:top-[35%] md:w-[70%] h-[55%] md:h-[70%] grid grid-cols-2 rounded-lg shadow-2xl'>
          <Image
            src = {wavePicBanner}
            alt = 'wavyy'
            width = '50%'
            height = '100%'
            layout='responsive'
            className='rounded-tl-xl rounded-bl-xl'
          />
          <div className='h-full flex-1 rounded-tr-xl rounded-br-xl bg-gray-100 p-7 relative'>
            <p>Lorem ipsum</p>
            <button className='absolute bottom-5 right-0 left-0 w-fit m-auto px-3 py-2 text-lg border-4 font-semibold border-slate-900'> Read more</button>
          </div>
        </div>
        {/* <button className='px-3 py-2 text-lg border-[1px] text-white'> Read more</button> */}
    </div>
  )
}

export default BlogBanner