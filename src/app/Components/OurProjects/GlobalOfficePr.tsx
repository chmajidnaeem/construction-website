"use client";
import { useState } from "react";
import Image from "next/image";
import Sustainability from "../../../../public/sustainability-hero.jpg";

const GlobalOfficePr = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between px-16 gap-10">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        {/* <Image
  className="w-[400px] h-[280px] absolute hover:brightness-50 hover:contrast-100"
  src="/Sustainability.jpg"
  alt="Your Image"
  width={350}
  height={200}
/> */}
        {/* {isHovered1 && ( */}
        <div className="relative">
          <Image
            className="w-[400px] h-[280px] absolute hover:brightness-50 hover:contrast-100"
            src="/Sustainability.jpg"
            alt="Your Image"
            width={350}
            height={200}
          />
          <div className="absolute left-0 w-full h-full top-56 flex flex-col px-8 hover:top-0">
            <h2 className="text-white text-2xl font-bold">Your Heading</h2>
            <p className="text-white text-lg opacity-0 hover:opacity-100 transition duration-300">
              Your paragraph text goes here.
            </p>
          </div>
        </div>
        {/* )} */}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <Image
          className=" w-[400px] h-[280px]"
          src="/Sustainability.jpg"
          alt="Your Image"
          width={350}
          height={200}
        />
            <h2 className="text-white text-2xl font-bold visible top-56 hover:hidden absolute">Your Heading</h2>

        {isHovered2 && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
            <h2 className="text-white text-2xl font-bold">Your Heading</h2>
            <p className="text-white text-lg">Your paragraph text goes here.</p>
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <Image
          className=" w-[400px] h-[280px]"
          src="/Sustainability.jpg"
          alt="Your Image"
          width={350}
          height={200}
        />
        {isHovered3 && (
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
            <h2 className="text-white text-2xl font-bold">Your Heading</h2>
            <p className="text-white text-lg">Your paragraph text goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalOfficePr;
