import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={beachVid}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>Wherever We Go</h1>
        <span className="py-2">Take memories, leave footprints.</span>
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input
              type="text"
              placeholder="Search Destination..."
              className="bg-transparent w-[200px] sm:w-[250px] focus:outline-none p-1 caret-[#71dad6] text-[#4c8776]"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#fff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
