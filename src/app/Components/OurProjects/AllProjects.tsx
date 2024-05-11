"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import "./animation.css";
import { Button } from "@chakra-ui/react";

const AllProjects = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div className="bg-[#020510]">
        
    <div className=" md:px-12 px-5  grid md:grid-cols-2 grid-cols-1 gap-12 md:pb-28 pb-10 pt-28 ">
      {/* left side  */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <Image
          className="md:w-[650px] md:h-[450px] w-full h-[282px]"
          src="/tetris-db-travelperk-spain-barcelona.jpg"
          alt="Your Image"
          width={350}
          height={200}
        />
        <h2 className=" text-white mt-3 text-2xl font-extrabold mx-6">
            Natixis
          </h2>
        {isHovered1 && (
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 px-6 py-8 transition-transform duration-500 transform translate-y-0 animate-slideIn">
            <h2 className="text-white text-3xl font-extrabold">TravelPerk</h2>

            <div className="text-white flex font-medium text-base mt-4">
              <p>Barcelona, Spain</p>
              <ul>
                <li className="list-disc ml-6">Office</li>
              </ul>
            </div>

            <p className="text-white mt-5 font-medium text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              ipsam temporibus pariatur aliquid odio, ut distinctio deserunt
              atque similique itaque illo.
              <p className="mt-auto text-white font-bold text-lg">
                Discover <span className="text-red-500 text-2xl">&#8594;</span>
              </p>
            </p>
          </div>
        )}
      </div>
      {/* rigth side  */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <Image
          className="md:w-[650px] md:h-[450px] w-full h-[282px]"
          src="/tetris-db-travelperk-spain-barcelona.jpg"
          alt="Your Image"
          width={350}
          height={200}
        />
        <h2 className=" text-white mt-3 text-2xl font-extrabold mx-6">
            Natixis
          </h2>
        {isHovered2 && (
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 px-6 py-8 transition-transform duration-500 transform translate-y-0 animate-slideIn">
            <h2 className="text-white text-3xl font-extrabold">TravelPerk</h2>

            <div className="text-white flex font-medium text-base mt-4">
              <p>Barcelona, Spain</p>
              <ul>
                <li className="list-disc ml-6">Office</li>
              </ul>
            </div>

            <p className="text-white mt-5 font-medium text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              ipsam temporibus pariatur aliquid odio, ut distinctio deserunt
              atque similique itaque illo.
              <p className="mt-auto text-white font-bold text-lg">
                Discover <span className="text-red-500 text-2xl">&#8594;</span>
              </p>
            </p>
          </div>
        )}
      </div>
    </div>


    <div className="pb-12 justify-center flex">
              <Button
                borderRadius={0}
                width={40}
                bg={"transparent"}
                textColor={"white"}
                // borderWidth={1}
                // borderColor="white"
                _hover={{  textColor: "red" }}
              >
                See All Projects
              </Button>
            </div>
    </div>

  );
};

export default AllProjects;
