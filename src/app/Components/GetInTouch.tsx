import React from "react";
import { Button } from "@chakra-ui/react";
const GetInTouch = () => {
  return (
    <div className="pb-12">
      <div
        className="bg-cover bg-center h-96 items-center flex flex-col pt-12 "
        style={{
          backgroundImage: `url(${"https://www.tetris-db.com/wp-content/uploads/2021/04/cta.jpg"})`,
        }}
      >
        <div className=" flex flex-col pt-16">
          <div>
            <h1 className="text-6xl font-bold flex flex-col">
              <span className="text-5xl text-center font-extrabold text-white">
                We would love to hear
                <br /> from you
              </span>
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // Set height to 100% of the viewport height
            }}
          >
            <div className="m-8">
              <Button
                borderRadius={0}
                width={40}
                bg={"transparent"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "red", textColor: "red" }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
