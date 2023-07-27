import React from "react";
import { FcShop } from "react-icons/fc";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useStateContext } from "../context/StateContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = useStateContext();
  return (
    <nav className="flex items-center justify-between bg-gray-50 shadow-md px-5 py-2 my-5 rounded">
      <div className="flex items-center gap-2">
        <FcShop className="text-4xl" />
        <h1 className="text-xl tracking-wider font-semibold text-info">Shop</h1>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/cart">
          <div className="flex items-center gap-2 bg-header text-white rounded px-2">
            <FaShoppingCart />
            <small>{cart.length}</small>
          </div>
        </Link>
        <div className="flex items-center gap-2 border-2 px-3 py-2">
          <FaSearch />
          <input
            type="text"
            className="outline-none bg-transparent"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
