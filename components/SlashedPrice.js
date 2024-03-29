import React from 'react';
import {default  as money} from "../lib/moneyString";

const SlashedPrice = ({price}) => {
  return (
    <div className=' relative w-fit h-fit flex items-center justify-center '>     
        
        <p className='text-center relative h-auto w-auto m-0 leading-none text-sm sm:text-normal md:text-base text-black/40 '>&#x20A6;{money(price)}</p>
        <hr className='absolute left-0 right-0 bottom-0 top-0 m-auto  border-black/40'/>
    </div>
  )
}

export default SlashedPrice