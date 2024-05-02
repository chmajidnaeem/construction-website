import React from 'react'
import { Button } from '@chakra-ui/react'
const GetInTouch = () => {
  return (
    <div>
      
      <div className="bg-cover bg-center items-center flex flex-col pt-12 mt-12 pl-12" style={{ backgroundImage: `url(${'data:image/jpeg;base64,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'})` }}>

      
        <div className=" flex flex-col">
          <div>
            <h1 className="text-6xl font-bold flex flex-col">
              <span className="text-5xl text-center font-extrabold text-white">
                We would love to hear<br/> from you
              </span>
              
            </h1>
          </div>
          <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
         // Set height to 100% of the viewport height
      }}
    >
      <div className='m-8'>
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
  )
}

export default GetInTouch
