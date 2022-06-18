import Image from 'next/image'
import React from 'react';
import WhiteShirt from '../public/dummyProducts/tshirtwhite.png'


const LandingPageBanner = () => {
  return (
    <div className='h-screen w-full bg-slate-900  relative '>
        <div className='left-0 top-0  w-full pt-4 md:pt-[100px] px-4 flex gap-80 justify-center items-start  '>
            <div className='gap-y-5 md:w-72 w-full flex flex-col justify-center md:justify-start items-start'>
                <h1 className='text-white/90 md:text-7xl text-4xl w-full text-center md:text-start carter-one'>Unlock you Cut, Unlock your King</h1>
                <p className='text-white/60 mt-7 md:text-[20px] text-3 leading-6 relative w-full flex-wrap flex '>
                    A natural hair bristled brush with lkmklm dflkmdlkfmkl lkmlkfdmk lk mlkmdflkmpdfkmpampomrpmopampo
                </p>
                
            </div>
            <div className='w-[700px] h-[700px] '>
                {/* <Image src = {brush} className='object-contain ' alt = 'wave_brush' width = '100%' height= '100%' layout='responsive'/> */}
                <Image src={WhiteShirt} alt= 'honks' className='spin' width= '100%' height='100%' layout='responsive'/>

            </div>
            
        </div>
        

            <button
                type='button'
                className = 'border-white border-2 p-3 px-8 text-white text-xl font-semibold text-center w-fit absolute bottom-5 md:bottom-20 left-0 right-0 m-auto'
            >
                SHOP NOW
            </button>
        
    </div>
  )
}

export default LandingPageBanner