import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CardContext"; // Make sure the path to CartContext is correct

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const { cart } = useContext(CartContext); // Get cart from CartContext
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate the total count of items in cart

  return (
    <div className="bg-black">
      <nav className="flex place-content-between items-center relative top-0 p-2 ">
        <ul className="flex mx-4">
          <li className="nav-item font-serif p-2 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item font-serif p-2 text-white">
            <Link to="/CartPage" className="text-white relative">
               Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white px-2 py-1 text-xs rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
        <div>
          <img
            role="button"
            tabIndex={0}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" // Replace with your user's profile picture URL
            alt="user"
            className="user-pic mx-11 size-8 rounded-full"
            onClick={toggleDropdown}
          />
          {showDropdown && (
            <div className="absolute bg-black rounded-lg z-10" id="dropdown">
              <Link to="/" className="text-white block px-4 py-2">
                Your Profile
              </Link>
              <hr />
              <Link to="/" className="text-white block px-4 py-2">
                Settings
              </Link>
              <hr />
              <Link to="/" className="text-white block px-4 py-2">
                Log Out
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
