import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown, AiFillFilter } from "react-icons/ai";
import { LandingPageBanner, Category } from "../components";
import { products as categories } from "../lib/dummy";
import { client } from '../lib/client';


const   Products = ({productsData}) => {
  const [pageScroll, setPageScroll] = useState(false);
  const element = useRef();
  const productsList = [
    {category:"all", alias:'All'},
    {category:"brush", alias:'Brushes'},
    {category:"durag", alias:'Durags'},
    {category:"creamAndOil", alias:'Hair cream & Oil'},
    {category:"shampoo", alias:'Shampoo'},
    {category:"wavecap", alias:'Wave cap'},
    
  ];

  const [productState, setProductState] = useState(0);
  
  return (
    <div
      className="bg-white w-full pt-[60px] md:pt-20 px-4 sm:px-7 md:px-20"
      ref={element}
     
    >
      <div className="w-full py-1 relative">
        <div className="flex gap-2 relative items-center w-fit drop-products mb-6">
          <div className="w-fit">
            <p className="font-semibold md:text-lg" >Filter</p>
          </div>
          <div className="border-[1px] relative flex items-center min-w-[60px] md:min-w-[90px] px-1 drop-products" >
            <p className="flex-1 text-black/60 md:text-lg">{productsList[productState].alias}</p>
            <span>
              <AiFillCaretDown />
            </span>
          </div>
          
            <div className="hover-effect absolute top-full min-w-fit flex-col gap-2 p-2 px-3 bg-white z-[100] shadow-lg ">
              {productsList.map((product, id) => (
                <p className="min-w-[120px]" key={id} onClick = {()=>{setProductState(id)}}>{product.alias}</p>
              ))}
            </div>
          
        </div>
      </div>
      <div className="bg-inherit  flex flex-col gap-2 relative">
        
          
          <Category
            products={productsData}
            filter = {productsList[productState].category}
          />
      </div>
    </div>
  );
};

export const getServerSideProps = async ()=>{
  const productsQuery = '*[_type == "item"]'
  const productsData = await client.fetch(productsQuery)


  return {
    props: {productsData, }
  }
}



export default Products;
