import React, { useEffect, useRef, useState } from 'react'
import { LandingPageBanner,Category } from '../components'
import { products as categories} from '../lib/dummy'

const products = () => {
    const [pageScroll,setPageScroll ] = useState(false)
    const element = useRef()
  
    // useEffect(()=>{
    //   window.scrollTo(0,pageScroll)
    // },
    // [])
    // useEffect(()=>{
    //   se
    // })
    return (
      <div className='bg-white w-full' ref = {element}>
        <div className='bg-inherit px-7 md:px-20 flex flex-col gap-2 py-20'>
          {
            Object.keys(categories).map((products)=>(
              <Category products={categories[products]} title = {products} key ={products}/>
            ))
  
          }
        </div>
      </div>
    )
}

export default products