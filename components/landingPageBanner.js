import Image from 'next/image'
import React from 'react';
import WhiteShirt from '../public/dummyProducts/tshirtwhite.png'
import Link from 'next/link'

const LandingPageBanner = () => {
  return (
    <div className='h-screen w-full bg-slate-900  relative '>
        <div className='left-0 top-0  w-full pt-[35%] md:pt-[100px] px-4 flex md:gap-80 justify-center items-start  '>
            <div className=' md:w-72 w-full flex flex-col justify-center md:justify-center items-center px-3'>
                <h1 className='text-white/90 text-4xl md:text-5xl xl:text-6xl w-full text-center md:text-start carter-one leading-10'>Unlock you Cut, Unlock your King</h1>
                <p className='text-white/60 mt-8 md:mt-10 md:text-lg xl:text-xl relative w-[80%] flex-wrap flex text-start'>
                    A natural hair bristled brush with lkmklm dflkmdlkfmkl lkmlkfdmk lk mlkmdflkmpdfkmpampomrp
                </p>
                
            </div>
            <div className='md:w-[700px] md:h-[700px] '>
                {/* <Image src = {brush} className='object-contain ' alt = 'wave_brush' width = '100%' height= '100%' layout='responsive'/> */}
                {/* <Image src={WhiteShirt} alt= 'honks' className='spin' width= '100%' height='100%' layout='responsive'/> */}

            </div>
            
        </div>
        
            <Link href = '/products'>
            
            <p
                className = ' cursor-pointer border-white border-2 py-2 px-3 md:py-3 md:px-8 text-white text-lg md:text-xl font-semibold text-center w-fit absolute bottom-5 md:bottom-20 left-0 right-0 m-auto'
            >
                SHOP NOW
            </p>
            </Link>
        
    </div>
  )
}

export default LandingPageBanner