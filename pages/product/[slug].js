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
import { RiSliceFill } from "react-icons/ri";
import { default as money } from "../../lib/moneyString";
import Link from "next/link";

{
  /* <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>  */
}

const ProductDetails = ({ item, products }) => {
  const [index, setIndex] = useState(0);
  const { onAdd, setShowCart } = useStateContext();
  let discount = 0.01 * item.discount * item.price;
  const [value, setValue] = useState(1);

  // const buyNow = (product, qty)=>{
  //     onAdd(product, qty)
  //     setShowCart(true)
  // }
  return (
    <div className="sm:px-5 md:px-10 px-3 w-full md:py-7 flex flex-col items-center ">
      <div className="md:px-20 sm:px-10 px-3 w-full flex sm:flex-row xl:h-fit sm:justify-center sm:items-start md:space-x-10 flex-col  mt-20  xl:mt-20 ">
        <div className="flex flex-col md:justify-between md:w-[50%] h-fit relative md:py-1">
          <div className="md:hidden mb-2">
            <h2 className="font-normal xl:text-4xl text-xl uppercase ">
              {item.name}
            </h2>
            <p className="text-black/60 font-normal max-lines w-full text-normal xl:text-xl">
              {item.description}
            </p>
          </div>
          <div className="h-fit flex flex-col items-center w-full ">
            <div className="h-fit w-[70%] max-w-[200px] md:max-w-[300px] ">
              <Image
                src={products[index].product}
                alt={products[index].name}
                width="100%"
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className=" max-w-[280px] h-[100px] md:w-[300px] md:max-w-[450px] xl:w-[450px] relative">
              {/* <h2 className="py-3 font-semibold text-black/70 text-normal md:text-lg xl:text-2xl">Select your choice</h2> */}
              <div className="flex gap-x-3 overflow-x-auto">
                {products.map((item, i) => (
                  <div
                    className=" h-fit md:w-[100px] md:h-[200px] variety__product md:py-3 py-1"
                    key={item._id}
                  >
                    <Image
                      onMouseEnter={() => setIndex(i)}
                      className={
                        i == index
                          ? "small-image selected-image"
                          : "small-image"
                      }
                      src={item.product}
                      alt={item.name}
                      width={"100%"}
                      height={"100%"}
                      layout="fixed"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Item details */}
        <div className="relative md:mt-0  xl:mt-0 md:flex-1 xl:w-fit overflow-hidden xl:space-y-5 ">
          <div className="md:block hidden">
            <h2 className="font-normal xl:text-4xl text-xl uppercase">
              {item.name}
            </h2>
            <p className="text-black/60 font-normal max-lines w-full text-normal xl:text-xl">
              {item.description}
            </p>
          </div>
          <div className="flex items-center space-x-2 xl:space-x-4 xl:mt-2 py-3">
            <p className=" text-bold md:text-lg xl:text-2xl">
              ${money(item.discount ? item.price - discount : item.price)}{" "}
            </p>
            {item.discount && (
              <div className="leading-none text-normal xl:text-lg">
                <SlashedPrice discount={item.discount} price={item.price} />
              </div>
            )}
            {item.discount && (
              <div className="text-green-500/70 p-1 w-fit relative pl-2">
                <p className=" text-sm xl:text-normal font-semibold">
                  You save <span className="">${money(discount)}</span>
                </p>
              </div>
            )}
          </div>
          <QtyAdjust value={value} setValue={setValue} />

          <div className="flex mt-2 md:mt-6  gap-y-1 xl:space-y-5 flex-col md:items-center xl:items-start xl:w-[500px] xl:justify-between w-full relative">
            <button
              className="border-black/30 border-2 w-full text-normal md:text-lg xl:mt-3 px-1 py-1 md:px-3 xl:py-3 text-black font-semibold text-center "
              type="button"
              onClick={() => {
                onAdd(item, value);
                toast.success(`${value} ${item.name} added to cart.`);
              }}
            >
              Add to Cart
            </button>
            <button className="border-black border-2 w-full text-normal md:text-lg mt-2 px-1 py-1 md:px-3 xl:py-3 bg-black font-semibold text-white text-center ">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full px-3 xl:px-6 mt-9">
        <h2 className=" text-black/70 text-lg xl:text-2xl md:font-semibold mt-3 mb-2">
          More like this{""}
        </h2>
        <div className="gap-4 flex p-4 flex-row items-start justify-start overflow-x-auto md:max-w-[90%] xl:w-[90%] w-full">
          {products?.slice(0, 7).map((item, i) => (
            <Product key = {item._id} Link = {Link} Image = {Image} SlashedPrice = {SlashedPrice} item = {item} money = {money}/>
          ))}
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
