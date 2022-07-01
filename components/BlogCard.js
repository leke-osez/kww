import React from 'react';
import Image from 'next/image';


const BlogCard = ({imageUrl, description, title}) => {
  return (
    <div className='w-full h-full  relative flex items-center justify-center bg-yellow-800'>
        {/* {imageUrl && 
        (<Image
            src = {imageUrl}
            alt = {title}
            width= '100%' 
            height = '100%' 
            layout='fixed'
            
        />)} */}
        <div className='absolute bottom-0 w-full h-30px md:h-[80px] bg-slate-400/40 '>
            <p className='text-white/90 md:text-base text-sm p-2 '>
                {description}
            </p>

        </div>
    </div>
  )
}

export default BlogCard