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
import { UrlFor } from "../lib/client";
import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    setShowCart,
    cartItems,
    toggleCartQuantity,
    totalQuantity,
    setTotalQuantity
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
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => {
            setShowCart(false);
          }}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantity} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>

            <button
              type="button"
              className="btn"
              onClick={() => {
                setShowCart(false);
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                {/* <img
                  src={UrlFor(item?.image[0])}
                  className="cart-product-image"
                /> */}
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() => toggleCartQuantity(item._id, "dec")}
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() => toggleCartQuantity(item._id, "inc")}
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => toggleCartQuantity(item._id, "del")}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${cartItems.reduce((total,item)=> total + item.quantity, 0)}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleCheckout}>
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
