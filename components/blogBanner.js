import React from 'react'

const BlogBanner = ({title, backgroundColor, content}) => {
  return (
    <div className={`w-full h-[500px] md:h-[500px] flex flex-col items-center justify-between py-7 px-4  ${backgroundColor}`} >
     
        <div className='md:mt-[100px] mt-[40px]'>

        <h1 className='text-center text-4xl font-semibold text-white '>{title}</h1>
        <div>
            {content}
        </div>
        </div>

        <button className='px-3 py-2 text-lg border-[1px] text-white'> Read more</button>
    </div>
  )
}

export default BlogBanner