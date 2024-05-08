import React from "react";
import Image from "next/image";

const Cases = [
  {
    image: "/nuxe-short-tetris-db-sustainability.jpg",
  },
  {
    image: "/7r-short-tetris-db-sustainability.jpg",
  },
  {
    image: "/sanofi-short-tetris-db-sustainability.jpg",
  },
  {
    image: "/smeno-short-tetris-db-sustainability.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className=" md:px-14 px-5 bg-[#020510]">
      <h2 className="text-white md:text-4xl text-3xl font-extrabold pt-16 left-0 ">
        Client testimonials
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-14 pb-12">
        {Cases.map((cases) => (
          <div key={cases.image} className="relative">
            <Image
              className="w-full h-[270px] object-cover transition-transform duration-300 transform hover:scale-105"
              src={cases.image}
              alt={cases.image}
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
