"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Stack, Button } from "@chakra-ui/react";
import Image from "next/image";
import Sustainability from "../../../../public/sustainability-hero.jpg";

const countries = [
  {
    name: "Pakistan",
    code: "pk",
    heading: "Get in touch with our team to talk about your projects",
    location: "Tétris Karachi",
    address: "Rue Docteur-Alfred 5, 1298 Karchi, Pakistan",
    phone: "+41 87 342 06 80*",
  },
  {
    name: "Belgium",
    code: "bg",
    heading: "Get in touch with our team to talk about your projects",
    location: "Tétris Marnix",
    address: "Avenue Marnix 23, 1000 Brussels, Belgium",
    phone: "+41 22 876 22 87*",
  },
  {
    name: "Dubai",
    code: "db",
    heading: "Get in touch with our team to talk about your projects",
    location: "Tétris Dubai",
    address: "Rue Docteur-Alfred-Vincent 9, 3445 Geneva, Dubai",
    phone: "+41 22 565 21 43*",
  },
  {
    name: "France",
    code: "france",
    heading: "Get in touch with our team to talk about your projects",
    location: "Tétris France",
    address: "Rue Alfred-Vincent 9, 8778 Geneva, France",
    phone: "+41 00 891 54 11*",
  },
];

const GetInTouch = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (country: any) => {
    setSelectedCountry(country);
  };

  return (
    <div className=" md:px-14 px-5 bg-[#020510]">
      <div className=" top-0 left-0 right-0  py-6 flex justify-left  items-center text-white text-xs font-bold pl-">
        <a href="/" className="mx-1 hover:underline">
          Home
        </a>
        <span className="">{">>"}</span>
        <a href="/about" className="mx-1 hover:underline">
          About Us
        </a>
        <span className="">{">>"}</span>
        <span className="mx-1">Meet The Team</span>
      </div>

      <div className="">
        <div className=" gap-x-12 md:flex">
          {/* left  side  */}
          <div className="mt-24">
            <div className="relative w-full ">
              <div className="absolute left-0 -top-32">
                <select
                  value={selectedCountry.code}
                  onChange={(e) =>
                    handleCountryChange(
                      countries.find(
                        (country) => country.code === e.target.value
                      )
                    )
                  }
                  className="block appearance-none  bg-[#020510]  text-white  text-3xl font-bold py-2 w-full pr-8 mt-12 rounded-lg"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <span className="text-lg absolute -right-1 text-white top-16">
                  {selectedCountry.code && <RiArrowDropDownLine />}
                </span>
              </div>
            </div>
            <Image
              className="md:w-[1500px] w-auto  md:h-[430px] h-[300px]"
              src={Sustainability}
              alt="Image description"
            />
          </div>

          {/* rigth side  */}
          <div className=" md:pt-[200px] pt-12 text-white mr-12">
            <p className="font-bold text-3xl">{selectedCountry.heading}</p>
            <p className="font-medium mt-4 text-base">
              {selectedCountry.location}
            </p>
            <p className="text-base font-medium">{selectedCountry.address}</p>
            <p className="text-base mt-5 underline underline-offset-1">
              {selectedCountry.phone}
            </p>
            <div className="absolute md:right-72 right-52 mt-16 transform -translate-x-1/2 -translate-y-1/2">
              <Stack spacing={6} direction={"row"}>
                <Button
                  borderRadius={0}
                  px={{ base: "3", sm: "6" }}
                  bg={"transparent"}
                  textColor={"white"}
                  borderWidth={1}
                  borderColor="white"
                  _hover={{ borderColor: "red", textColor: "red" }}
                >
                  Contact Us
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
