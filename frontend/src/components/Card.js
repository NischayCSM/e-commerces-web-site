import React, { useContext } from "react";
import { CartContext } from "../context/CardContext";

function Card({ imageurl, itemname, price }) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart({ imageurl, itemname, price });
  };

  return (
    <div className="card box-border w-64 border-solid border-2 m-3 border-black p-4 bg-white">
      <img 
        src={imageurl || "default-image-url.jpg"} // Fallback if imageurl is undefined
        className="w-full h-40 object-cover" 
        alt={itemname || "Default Item Name"} // Fallback if itemname is undefined
      />
      <div className="card-body mt-2">
        <h5 className="card-title text-xl font-semibold">{itemname || "Default Item Name"}</h5>
        <p className="card-text text-gray-700">₹{price || "0"}</p> {/* Fallback for price */}
        <button
          onClick={handleAdd}
          className="bg-blue-700 text-white px-4 py-1 rounded mt-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;


