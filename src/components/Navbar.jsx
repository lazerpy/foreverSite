import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);


  return (
    <div className="flex items-center justify-between mt-0.2 font-medium py-5">
    <Link to='/'><img src={assets.logo} className="w-36" alt="" /> </Link>  

      <ul className=" hidden sm:flex gap-5 text-sm text-gray-700 ">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px]  bg-blue-800  hidden  " />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px]  bg-blue-800   hidden " />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-blue-800  hidden  " />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px]  bg-blue-800   hidden  " />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6  ">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="group relative rounded-xl">
        <Link to='/login'>  <img src={assets.profile_icon} className="w-5" alt="" /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-1 rounded-xl bg-slate-200">
            <div className="flex flex-col  w-36 py-2 px-5 rounded-3xl">
              <p className="cursor-pointer hover:bg-gray-900 hover:text-white px-1 rounded-xl ">
                My Profile
              </p>
              <p className="cursor-pointer hover:bg-gray-900  hover:text-white px-1 rounded-xl">
                Orders
              </p>
              <p className="cursor-pointer hover:bg-gray-900  hover:text-white px-1 rounded-xl">
                Log OUt
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute bottom-[-5px] font-bold right-[-5px] aspect-square rounded-full text[8px] text-white text-center leading-4 bg-black">
           -
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer lg:hidden"
        />
      </div>
      {/*  nav small screens*/}
      <div
        className={`absolute t top-0 ring-0 bottom-0 overflow-hidden transition-all bg-white ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600  cursor-pointer">
          <div className="flex items-center gap-4">
            <img
              onClick={() => setVisible(false)}
              src={assets.dropdown_icon}
              alt=""
              className="rotate-180 h-4"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 "
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 "
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 "
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 "
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
