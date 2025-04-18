import React, { useContext } from "react";
import { CartContext } from "../context/CardContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, decreaseItemQuantity, message } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-slate-300 bg-fixed flex flex-col">
      <div className="p-6 space-y-10 flex-grow">
        <h2 className="text-2xl font-bold">Your Cart</h2>

        {message && (
          <div className="bg-green-200 text-green-800 px-4 py-2 rounded shadow w-fit mb-4">
            {message}
          </div>
        )}

        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.itemname} className="flex items-center space-x-4">
                <img
                  src={item.imageurl}
                  alt={item.itemname}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h5 className="font-bold">{item.itemname}</h5>
                  <p>₹{item.price} x {item.quantity}</p>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => decreaseItemQuantity(item.itemname)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.itemname)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <Link to="/">
          <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
