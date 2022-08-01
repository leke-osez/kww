import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import { TextareaAutosize } from "@mui/material";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import { paystack } from "../lib/client";
import { states } from "../lib/data";
import { default as money } from "../lib/moneyString";

const Checkout = () => {
  const { totalQuantity, cartItems } = useStateContext();
  const router = useRouter();

  const ordered_items = cartItems.map((cartItem) => ({
    product_name: cartItem.name,
    more: cartItem.more ? cartItem : "",
    original_price: cartItem.discount
      ? cartItem.price / (1- cartItem.discount * 0.01)
      : cartItem,
    price_after_discount: cartItem.discount ? cartItem.price : 0,
    discount: cartItem.discount ? cartItem.discount : 0,
    quantity: cartItem.quantity,
  }));
  const totalPrice = () =>
    cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  const [formField, setFormField] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    state: "",
  });
  const [showStates, setShowStates] = useState(false);
  const { email,  name, phone, address, state } = formField;

  const handleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };
  const componentProps = {
    email,
    amount: totalPrice() * 100,
    metadata: {
      name,
      phone,
      state,
      address,
      quantity:parseInt(totalQuantity),
      ordered_items,

    },
    publicKey: process.env.NEXT_PUBLIC_KEY,
    text: "Pay Now",

    onSuccess: (response) => {
      console.log(response);
      alert("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };
  useEffect(() => {
    if (!totalQuantity) {
      router.push("/cart");
    }
  });

  // useEffect(()=>{
  //   const script = document.getEle
  // })
  if (totalQuantity)
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center"
        onClick={() => setShowStates(false)}
      >
        <form
          id="paymentForm"
          className="mt-20 w-full flex flex-col items-center gap-3"
        >
          <h1>Please fill in your details</h1>

          <div className="form-group text-lg">
            <label htmlFor="amount">
              Total Amount:{" "}
              <span className="font-normal text-xl bg-green-400/30 px-2">
                &#x20A6;{`${money(totalPrice())}`}
              </span>
            </label>
            <p type="tel" id="amount"></p>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={handleChange}
              value={phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              value={email}
            />
          </div>

          <div
            className="form-group w-[60%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              required
              onChange={handleChange}
              value={state}
              onFocus={() => setShowStates(true)}
            />
            {showStates && (
              <div className="absolute top-full bg-white  z-[5] shadow-md">
                <ul className="max-h-[200px] overflow-scroll mt-1 w-40">
                  {states
                    .filter((state) => {
                      const regex = new RegExp(
                        `${formField.state.toLowerCase()}`,
                        "g"
                      );
                      if (!formField.state) return true;
                      else {
                        return regex.test(state.toLowerCase());
                      }
                    })
                    .map((state) => (
                      <li
                        key={state}
                        className="cursor-pointer hover:bg-gray-400/60 px-2"
                      >
                        <div
                          onClick={() => {
                            console.log(state);
                            setFormField({ ...formField, state });
                          }}
                          className="w-full"
                        >
                          {state}
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col item-start form-group">
            <label htmlFor="address">Address</label>
            <TextareaAutosize
              type="text"
              id="address"
              name="address"
              required
              onChange={handleChange}
              minRows={4}
              style={{
                width: "100%",
                borderWidth: 2,
                minHeight: 10,
                borderColor: "black",
                borderRadius: 10,
                padding: 4,
              }}
              placeholder="Your delivery address"
              value={address}
            />
          </div>

          <div className="form-submit">
            <PaystackButton
              {...componentProps}
              className="text-2xl text-white font-semibold text-center px-10 py-3 flex justify-center items-center gold"
            />
          </div>
        </form>
      </div>
    );
};

export default Checkout;
