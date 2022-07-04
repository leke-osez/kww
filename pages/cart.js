import React, { useRef } from "react";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineShopping,
  AiOutlineLeft,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import QtyAdjust from "../components/QtyAdjust";
import Link from "next/link";
import {default  as money} from "../lib/moneyString";
// import { UrlFor } from "../lib/client";
// import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    setShowCart,
    cartItems,
    toggleCartQuantity,
    totalQuantity,
    setTotalQuantity,
  } = useStateContext();

  const handleCheckout = async () => {
    // const stripe = await getStripe();
    // const response = await fetch("/api/stripe", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ cartItems }),
    // });
    // if (response.statusCode === 500) return;
    // const data = await response.json();
    // toast.loading("Redirecting...");
    // stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div
      className=" relative pt-20 h-screen w-full flex justify-center"
      ref={cartRef}
    >
      <div className="md:w-70% w-full flex flex-col items-center">
        <p
          className="flex justify-center pb-4 items-center gap-3"
          // onClick={() => {
          //   setShowCart(false);
          // }}
        >
          {/* <AiOutlineLeft className="text-2xl font-semibold"/> */}
          <span className="text-xl md:text-3xl font-semibold text-center">Your Cart</span>
          <span className="text-lg md:text-2xl font-semibold text-black/60">
            ({totalQuantity} {totalQuantity > 1 ? "items" : "item"})
          </span>
        </p>


        {/* Empty Cart */}
        {cartItems.length < 1 && (
          <div className="flex  flex-col items-center justify-start space-y-6">
            <AiOutlineShopping size={150} className="text-green-500" />
            <h3 className="text-3xl font-bold text-center">
              Your shopping bag is empty
            </h3>
            <Link href={"/products"}>
              <button
                type="button"
                className="relative mt-6 border-black border-4 px-4 py-3 text-black font-semibold text-center text-xl"
                onClick={() => {
                  setShowCart(false);
                }}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        {/* In Cart */}
        <div className="w-full flex flex-col items-center md:w-[500px] space-y-10 overflow-y-scroll  flex-1">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="flex space-x-2 w-full" key={item._id}>
                <div className=" h-[100px] w-[100px] md:h-[140px] md:w-[140px] relative border-r-[1px] border-black/20 px-3">
                  <Image
                    src={item.product}
                    alt={item.name}
                    width="100%"
                    height="105%"
                    layout="responsive"
                  />
                </div>
                <div className="w-[50%] flex justify-between items-start relative md:pl-3">
                  <div className="space-y-1">
                    <h5 className="text-xl font-semibold capitalize">
                      {item.name}
                    </h5>
                    <h4>Price: ${money(item.price)}</h4>
                    <h4>{<QtyAdjust cartQtyAdjust item={item} />}</h4>
                  </div>
                  <div className="">
                    <div></div>
                    <button
                      type="button"
                      className=" text-base text-red-600 hover:text-slate-600"
                      onClick={() => toggleCartQuantity(item._id, "del")}
                    >
                      {/* <TiDeleteOutline /> */} remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="py-3">
            <div className="flex justify-start items-center space-x-3 mb-10">
              <h3 className="text-xl md:text-2xl font-semibold">Subtotal:</h3>
              <h3 className="text-xl md:text-2xl font-semibold">
                ${money(
                  cartItems.reduce(
                    (total, item) => total + item.quantity * item.price,
                    0
                  )
                )}
              </h3>
            </div>
            <div className=" w-[full] flex justify-center items-center">
              <button
                type="button"
                className="text-xl text-white bg-purple-900 font-semibold text-center px-9 py-3 flex justify-center items-center"
                onClick={handleCheckout}
              >
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
