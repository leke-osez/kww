import React from 'react'

const SlashedPrice = ({discount,price}) => {
  return (
    <div className=' relative w-fit h-fit flex items-center justify-center '>     
        
        <p className='text-center relative h-auto w-auto m-0 leading-none text-lg text-black/40 '>${price}</p>
        <hr className='absolute left-0 right-0 bottom-0 top-0 m-auto  border-black/40'/>
    </div>
  )
}

export default SlashedPrice