'use client'

import React from 'react'
import Image from 'next/image'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button, ButtonGroup,
  Center
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { color, px } from 'framer-motion'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  // centerMode: true, // Enable center mode
  // centerPadding: '10%',
}

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Design Projects 1',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
  ]

  return (
    <Box position="relative" height="420px" width="full" overflow="hidden">
    {/* CSS files for react-slick */}
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    {/* Left Icon */}
    <IconButton
      aria-label="left-arrow"
      variant=""
      color={'white'}
      _hover={{ color: 'red' }}
      marginTop={4}
      position="absolute"
      right={12}
      top={96}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickPrev()}
    >
      <BiLeftArrowAlt size="40px" />
    </IconButton>
    {/* Right Icon */}
    <IconButton
      aria-label="right-arrow"
      variant=""
      color={'white'}
      _hover={{ color: 'red' }}
      position="absolute"
      right={4}
      marginTop={4}
      top={96}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickNext()}
    >
      <BiRightArrowAlt size="40px" />
    </IconButton>
    {/* Slider */}
    <Slider
      {...settings}
      ref={(slider) => setSlider(slider)}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {cards.map((card, index) => (
        <Box key={index} position="relative">
          <Box
            position="absolute"
            left={0}
            top={0}
            zIndex={1}
            width="40%"
            height="100%"
            background="rgba(0, 0, 0, 0.7)"
           
          >
            <Stack
              spacing={6}
              direction="column"
              alignItems="start"
              justifyContent="left"
              height="100%"
              padding={6}
              color="white"
            >
              <Box
  borderRadius={0}
  width={24}
  bg={'rgba(0, 0, 0, 0.5)'} // 50% transparency black background
  color={'white'}
  textAlign={'center'}
  lineHeight={'36px'} // Adjust as needed for vertical alignment
>
  Project
</Box>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                {card.title}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }}>
                {card.text}
              </Text>
              <Button
                borderRadius={0}
                width={40}
                bg={'transparent'}
                textColor={'white'}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: 'red', backgroundColor: 'red' }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
          <Image src={card.image} alt={''} height={420} width={1170} />
        </Box>
      ))}
    </Slider>
  </Box>
  )
}



