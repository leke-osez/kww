import React from "react";
import { UrlFor } from "../lib/client";

const Product = ({
  Link,
  Image,
  SlashedPrice,
  item: { image, name, discount, price, slug, _id, description },
  money,
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="relative product p-2  w-full cursor-pointer">
          {/* hover effect */}
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/10 z-10 item-view cursor-pointe">
            <div className="w-full h-full flex items-center justify-center">
              <p className="bg-white/80 text-black/70 py-3 px-5 font-semibold text-base text-center -mt-28 md:-mt-20">
                VIEW
              </p>
            </div>
          </div>

          {/* discount yellow */}
          {discount > 0 && (
            <div className="absolute top-1 left-2 aspect-square rounded-full z-[2] w-6 p-[0.1rem] flex justify-center items-center bg-yellow-400/80">
              <p className="text-center text-black/60 md:text-sm text-xs">{discount}%</p>
            </div>
          )}
          {/* item content */}
          <div className=" h-[200px] aspect-square sm:w-[150px] sm:h-[150px]  md:h-[200px] md:w-[200px] xl:h-[250px] xl:w-[250px] relative product-image">
            <img
              src={image ? UrlFor(image[0]) : ""}
              className="w-[100%] h-[100%] mx-auto object-contain"
              alt={name}
            />
          </div>

          <div className="relative mt-4 w-full overflow-hidden ">
            <h2 className="font-semibold md:text-lg uppercase text-sm">{name}</h2>
            <p className="text-black/60 font-base md:font-semibold text-sm max-lines w-full">
              {description}
            </p>
            <div className="flex space-x-4 mt-2 items-center">
              <p className="leading-none text-lg">
              &#x20A6;{money(discount ? price - 0.01 * discount * price : price)}{" "}
              </p>
              {discount > 0 && (
                <SlashedPrice discount={discount} price={price} />
              )}
            </div>
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
  );
};

export default Product;
