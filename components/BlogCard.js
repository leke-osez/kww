import React from 'react';
import Image from 'next/image';
import { UrlFor } from '../lib/client';
import Link from 'next/link'


const BlogCard = ({imageUrl, description, title, slug}) => {
  return (
    <Link href = {`/blogs/${slug?.current}`}>
    
    <div className='w-full h-full relative flex items-center justify-center bg-yellow-800 overflow-hidden'>
        {imageUrl && 
        (<img
            src = {imageUrl ? UrlFor(imageUrl): ''}
            alt = {title}
            className = 'w-full h-full object-cover variety__product '
            
        />)}
        <div className='absolute bottom-0 w-full h-30px md:h-[80px] bg-slate-700/90 '>
            <p className='text-white/90 md:text-base text-sm p-2 '>
                {description}
            </p>

        </div>
    </div>
    </Link>
  )
}

export default BlogCard