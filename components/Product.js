import React from 'react'

const Product = ({Link,Image,SlashedPrice,item,money}) => {
  return (
    <div>
        <Link href={`/product/${item._id}`}  key = {item.name}>   
            <div  className = 'relative product p-2  w-fit '>
                {/* hover effect */}
                <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/10 z-10 item-view '>
                    <div className='w-full h-full flex items-center justify-center'>
                        <p className='bg-white/80 text-black/70 py-3 px-5 font-semibold text-base text-center -mt-28 md:-mt-20'>VIEW</p>
                    </div>
                </div>
                {/* item content */}
                <div className=' h-[100px] w-[100px]  md:h-[200px] md:w-[200px] xl:h-[400px] xl:w-[400px] relative ' >
                    <Image src={item.product} alt = {item.product} width= '100%' height = '105%' layout='responsive'/>       
                </div>


                <div className='relative mt-4 w-[150px] sm:w-[200px] xl:w-[400px] overflow-hidden '>
                    <h2 className='font-semibold md:text-lg uppercase'>{item.name}</h2>
                    <p className='text-black/60 font-base md:font-semibold max-lines w-full'>{item.description}</p>
                    <div className='flex space-x-4 mt-2 items-center'>
                        <p className='leading-none text-lg'>${money(item.discount ? (item.price - (0.01 * item.discount * item.price)): item.price)} </p>
                        {item.discount && <SlashedPrice discount = {item.discount} price = {item.price}/>}
                    </div >
                    {/* <div className = 'flex justify-between items-center mt-3 px-3'>
                        {item.discount && (<div className='bg-green-500/40 p-1 border-r-4 w-fit '>
                            <p>You save <span className='font-semibold'>${0.01 * item.discount * item.price}</span></p>
                        </div>)}
                        <div className = ''>
                            <button className='border-black border-2 px-3 py-2 text-black text-center '>Add to Cart</button>
                        </div>
                    </div> */}
                </div>
            </div>
            </Link>
    </div>
  )
}

export default Product