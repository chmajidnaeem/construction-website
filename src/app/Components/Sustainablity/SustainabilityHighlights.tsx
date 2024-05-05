"use client";
import React from "react";
import Image from "next/image";
import Sustainability from "../../../../public/sustainability-hero.jpg";
import SustainabilityIntro from "../../../../public/sustainability-intro.jpg";
import TextureImg from "../../../../public/tetrisdb-illus-texture-cta-32.jpg";
import { Stack, Button } from "@chakra-ui/react";

const SustainabilityHighlights = () => {
  return (
    <div>
      <div className="lg:px-36 md:px-12 px-5 bg-[#020510] grid md:grid-cols-2 grid-cols-1 gap-14 md:pb-28 pb-10 ">
        {/* left side  */}
        <div className="">
          <Image
            className="md:w-[550px] md:h-[350px] w-full h-[282px] "
            src={SustainabilityIntro}
            alt="Image description"
          />
        </div>
        {/* right side  */}
        <div className="text-white  text-xl ">
          <h2 className="text-2xl font-extrabold">
            Tétris 2022 Sustainability Highlights
          </h2>
          <p className="md:mt-5 mt-3 text-sm">
            We have published our Tétris 2022 Sustainability Highlights. See how
            far we have come in our sustainability strategy and learn more about
            our sustainability stories and the key initiatives we delivered in
            2022. Discover how, as a leading design and build business, we
            support our parent company, JLL, in shaping the future of real
            estate for a better world by creating inspiring spaces for everyone.
          </p>
          <p className="md:mt-5 mt-3 text-sm font-bold">Download:</p>
          <div className="mt-8">
            <Stack spacing={6} direction={"row"}>
              <Button
                borderRadius={0}
                px={{ base: "3", sm: "6" }}
                bg={"#020510"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "red", textColor: "red" }}
              >
                Tétris 2022 Sustainability Highlights
              </Button>
            </Stack>
          </div>
          <div className="mt-3">
            <Stack spacing={6} direction={"row"}>
              <Button
                borderRadius={0}
                px={{ base: "3", sm: "6" }}
                bg={"#020510"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "red", textColor: "red" }}
              >
                Tétris 2022 Sustainability Highlights summary
              </Button>
            </Stack>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Image
            className="md:w-full md:h-[200px] w-full h-[282px] px-16 absolute"
            src={TextureImg}
            alt="Image description"
          />
        </div>
        <div>
          {/* Second instance of texture image */}
          <div
            style={{
              position: "relative",
              height: "300px",
              overflow: "hidden",
            }}
          >
            <Image
              className="md:w-full md:h-[300px] w-full h-[300px]  relative  left-0 "
              src={TextureImg}
              alt="Image description"
              style={{ filter: "blur(10px)", opacity: "0.2" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityHighlights;
