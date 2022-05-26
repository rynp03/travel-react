import React from "react";

const SelectCard = ({ name, path }) => {
  return (
    <div className="relative">
      <img className="w-full h-full object-cover rounded-md" src={path} alt="/" />
      <div className="bg-gray-900/30 rounded-md transition duration-300 hover:bg-gray-900/10 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 absolute text-2xl font-bold text-white">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SelectCard;
