import React, { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  let foundProduct;
  let index;

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);
  const [products, setProducts] = useState(null)

  const onAdd = (items, quant) => {
    const quantity = parseInt(quant)
    const product = {...items}
    const checkCart = cartItems.find((cartItem) => cartItem._id === product._id
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
          else return cartItem
        })
      );
    } else {
      product.quantity = quantity;
      if (product.discount) {
        product.price = product.price - (0.01 * product.discount * product.price)
      }
      setCartItems([...cartItems, product]);
    }
    setTotalQuantity((prevQty) => prevQty + quantity);

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
          return {...item};
        })
        );
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);

    } else if (value === "dec") {
      //decrease item on cart
      if (foundProduct.quantity > 1) {
        setCartItems(
          cartItems.map((item) => {
            if (item._id === id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return {...item};
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
    
    if (localStorage.getItem('cartItems')) {
      setCartItems(JSON.parse(localStorage.getItem('cartItems')))
      setTotalQuantity(JSON.parse(localStorage.getItem('totalQuantity')))
      
    }

    return
  },[])
  useEffect(()=>{
    if (cartItems ) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity))
    
    };

  },[cartItems])
  return (
    <Context.Provider
      value={{
        qty,
        setQty,
        cartItems,
        setCartItems,
        showCart,
        setShowCart,
        onAdd,
        totalQuantity,
        setTotalQuantity,
        toggleCartQuantity,
        showMenu,setShowMenu,
        products, setProducts
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
