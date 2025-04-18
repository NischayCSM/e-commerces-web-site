import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(null); // ✅

  const showTemporaryMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 2000); // Hide after 2 seconds
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.itemname === item.itemname);

      if (existingItemIndex > -1) {
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        showTemporaryMessage(`➕ Increased ${item.itemname} quantity`);
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...item, quantity: 1 }];
        showTemporaryMessage(`🛒 Added ${item.itemname} to cart`);
        return updatedCart;
      }
    });
  };

  const decreaseItemQuantity = (itemName) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) => {
          if (cartItem.itemname === itemName) {
            return {
              ...cartItem,
              quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : cartItem.quantity,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.itemname !== itemName));
    showTemporaryMessage(`❌ Removed ${itemName}`);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseItemQuantity, removeFromCart, message }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
