import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between absolute z-10 items-center h-20 px-4 text-white w-full">
      <div>
        <h1 className={nav ? "hidden md:block select-none" : "block select-none"}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
      </div>
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? <AiOutlineClose size={20} className={nav && "text-black"} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile  */}

      <div
        className={
          nav
            ? "absolute left-0 top-0 w-full md:hidden text-black bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%] top-0 w-full md:hidden bg-gray-100/90 px-4 py-7 flex flex-col"
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b border-gray-300">Home</li>
          <li className="border-b border-gray-300">Destinations</li>
          <li className="border-b border-gray-300">Travel</li>
          <li className="border-b border-gray-300">View</li>
          <li className="border-b border-gray-300">Book</li>
        </ul>
        <div className="flex flex-col">
          <button className="my-6">Search</button>
          <button>Account</button>
        </div>
        <div className="flex justify-between my-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
