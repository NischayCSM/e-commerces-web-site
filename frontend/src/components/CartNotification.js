// components/CartNotification.js
import React from 'react';
import { useCart } from '../context/CardContext';

const CartNotification = () => {
  const { message } = useCart();

  if (!message) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce">
      {message}
    </div>
  );
};

export default CartNotification;
