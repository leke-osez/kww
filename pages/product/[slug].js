import React, { useState } from "react";
// import { client, UrlFor } from '../../lib/client';
import { products as categories } from "../../lib/dummy";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";
import Image from "next/image";
import SlashedPrice from "../../components/SlashedPrice";
import QtyAdjust from "../../components/QtyAdjust";
import { toast } from "react-hot-toast";


{
  /* <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>  */
}

const ProductDetails = ({ item, products }) => {
  // const [index, setIndex] = useState(0)
  // // const {image, details, price, name} = product;
  const { onAdd,setShowCart} = useStateContext()

  const [value, setValue] = useState(1);

  // const buyNow = (product, qty)=>{
  //     onAdd(product, qty)
  //     setShowCart(true)
  // }
  return (
    <div className="px-20 ">
      <div className="relative product p-2 w-fit h-fit flex space-x-10 mt-20">
        {/* hover effect */}
        {/* <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/10 z-10 item-view ">
          <div className="w-full h-full flex items-center justify-center">
            <p className="bg-white/80 text-black/70 py-3 px-5 font-semibold text-base text-center -mt-28 md:-mt-20">
              VIEW
            </p>
          </div>
        </div> */}
        {/* item content */}
        <div className=" h-[200px] w-[200px] md:h-[450px] md:w-[450px] relative ">
          <Image
            src={item.product}
            alt={item.product}
            width="100%"
            height="105%"
            layout="responsive"
          />
        </div>
        <div className="relative mt-4 w-[200px] md:w-[400px] overflow-hidden space-y-5 ">
          <h2 className="font-semibold text-4xl uppercase">{item.name}</h2>
          <p className="text-black/60 font-normal max-lines w-full text-xl">
            {item.description}
          </p>
          <div className="flex space-x-4 mt-2">
            <p className="leading-none text-lg">
              ${item.discount ? 0.01 * item.discount * item.price : item.price}{" "}
            </p>
            {item.discount && (
              <SlashedPrice discount={item.discount} price={item.price} />
            )}
          </div>
          <div className="flex flex-col justify-between  w-full relative">
            {item.discount && (
              <div className="bg-green-500/40 p-1 border-r-4 w-fit relative ">
                <p>
                  You save{" "}
                  <span className="font-semibold">
                    ${item.price - 0.01 * item.discount * item.price}
                  </span>
                </p>
              </div>
            )}
            <div className="mt-10 space-y-5">
                <QtyAdjust value = {value} setValue = {setValue}/>
              <button 
                className="border-black/30 border-2 w-full px-3 py-3 text-black font-semibold text-center "
                type = 'button'
                onClick={()=> {
                    onAdd(item, value)
                    toast.success(`${value} ${item.name} added to cart.`);

                }}
                >
                Add to Cart
              </button>
              <button className="border-black border-2 w-full px-3 py-3 bg-black font-semibold text-white text-center ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  // const query = '*[_type == "product"] {slug{ current}}'
  // const products = await client.fetch(query);

  const paths = categories.shirts.map((product) => ({
    params: {
      slug: product._id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  // const query = `*[_type == "product" && slug.current == "${slug}"][0]`
  // const productsQuery = '*[_type == "product"]';

  // const product=await client.fetch(query);
  // const products=await client.fetch(productsQuery)

  const item =
    categories.shirts[
      categories.shirts.findIndex((shirt) => shirt._id == slug)
    ];
  const products = [...categories.shirts, ...categories.shoes];
  return {
    props: { products, item },
  };
};

export default ProductDetails;
