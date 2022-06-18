import Head from 'next/head'
import { LandingPageBanner,Category } from '../components'
import { products as categories} from '../lib/dummy'

export default function Home() {
  return (
    <div className='bg-white w-full'>
      <LandingPageBanner/>
      <div className='bg-inherit px-7 md:px-20'>
        {
          Object.keys(categories).map((products)=>(
            <Category products={categories[products]} title = {products} key ={products}/>
          ))
         
        }
      </div>
    </div>
  )
}
