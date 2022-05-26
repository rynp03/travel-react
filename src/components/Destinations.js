import React from "react";
import borabora from "../assets/borabora.jpeg";
import borabora2 from "../assets/borabora2.jpeg";
import keywest from "../assets/keywest.jpeg";
import maldives from "../assets/maldives.jpeg";
import maldives2 from "../assets/maldives2.jpeg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All Inclusive Resorts</h1>
      <span>On the Caribbean's Best Beaches</span>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img className="w-full h-full object-cover col-span-2 row-span-2 md:col-span-3 rounded-md" src={borabora} alt="/" />
        <img className="w-full h-full object-cover rounded-md" src={borabora2} alt="/" />
        <img className="w-full h-full object-cover rounded-md" src={keywest} alt="/" />
        <img className="w-full h-full object-cover rounded-md" src={maldives} alt="/" />
        <img className="w-full h-full object-cover rounded-md" src={maldives2} alt="/" />
      </div>
    </div>
  );
};

export default Destinations;
