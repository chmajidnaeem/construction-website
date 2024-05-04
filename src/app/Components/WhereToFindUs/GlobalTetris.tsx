"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import WhoWeAreImg from "../../../../public/tetrisdb-illus-who-we-are-header.jpg";

const GlobalTetris = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <div className="bg-[#020510]  md:px-20 px-5">
      <h2 className="md:text-5xl text-3xl text-white font-extrabold pt-12 bg-[#020510]">
        Tétris around the world
      </h2>
      <div className="relative  mt-14   md:w-[570px] w-full">
        <input
          type="text"
          className="md:w-[570px] w-full py-3 pl-5 pr-12 border text-white bg-[#1f2429] border-none"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChange}
        />
        {searchValue && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-3 text-white "
            onClick={handleClear}
          >
            <RiCloseLine />
          </button>
        )}
        <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
          <RiSearchLine className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      {/* countries list  */}
      <div className="grid grid-cols-2 gap-10 mt-14">
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
        <div className="relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          src={WhoWeAreImg}
          alt="Image description"
        />
          <div className="absolute bottom-0 left-0 py-4 px-5">
            <h2 className="text-white font-bold text-2xl">United Kingdom</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTetris;
