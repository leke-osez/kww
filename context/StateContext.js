import React, { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  let foundProduct;
  let index;

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const onAdd = (product, quantity) => {
    const checkCart = cartItems.find(
      (cartItem) => cartItem._id === product._id
    );

    if (checkCart) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (product._id === cartItem._id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + quantity,
            };
          }
        })
      );
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, product]);
    }
    setTotalQuantity((prevQty) => prevQty + quantity);
    toast.success(`${qty} ${product.name} added to cart.`);
  };

  const toggleCartQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => id === item._id);
    index = cartItems.findIndex((item) => id === item._id);

    if (value === "inc") {
      setCartItems(
        cartItems.map((item) => {
          // increase item in cart
          if (item._id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
        );
    } else if (value === "dec") {
      //decrease item on cart
      if (foundProduct.quantity > 1) {
        setCartItems(
          cartItems.map((item) => {
            if (item._id === id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
        );
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
      } 

    }

    else if (value === "del") {
        setCartItems(cartItems.filter((item) => item._id !== id));
        setTotalQuantity(
          (prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity
        );
      }

  };
  useEffect(()=>{
    if (localStorage.getItem('cartItems')) setCartItems(localStorage.getItem('cartItems'));
    return
  },[])
  useEffect(()=>{
    localStorage.setItem('cartItems', cartItems);

  },[cartItems])
  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        showCart,
        setShowCart,
        onAdd,
        totalQuantity,
        setTotalQuantity,
        toggleCartQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
