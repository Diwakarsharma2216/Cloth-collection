import React, { useEffect, useState } from 'react'
import  Navbar  from '../component/Navbar'
import  Footer  from '../component/Footer'
import { FcFilledFilter } from "react-icons/fc";
import { Box, Container, HStack, IconButton, Image, Select, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import ProductAddToCart from '../component/Card';
import axios from "axios"

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const HomePage = () => {
  const [slider, setSlider] = React.useState(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  const [filter,setfilter]=useState(false)
const [data,setdata]=useState([])
   // These are the images used in the slide
   const cards = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  ];
  useEffect(()=>{
    axios.get("http://localhost:4200/cloth/").then((res)=>{
      setdata(res.data.msg)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
        <Box w={"100%"} textAlign={"center"} h={"6"} bg={"red.400"} color={"whiteAlpha.800"} fontWeight={"bold"}>
       HURRY 🔥SALE ENDS IN 2 DAYS
        </Box>
       {/* Navbar is Here */}
       <Navbar />

       {/*  Carousels Part Here */}
       <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
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
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  {/* Mid Part Here  */}
  <Box w={"100%"} h={"10"} bg={"blackAlpha.400"} mt={"1"}>
    {/* <Text textAlign={"center"} mt={"3"} color={"black.800"} fontSize={{base:"xl",md:"2xl"}} fontWeight={"bold"}>
    CATEGORIES
    </Text> */}
    <Box >
    <HStack border={"2px solid green"}  w={{base:"50%",md:"13%"}} m={"auto"}>
      <Box border={"2px solid red"}  w={"50%"} m={"auto"} color={"red"}>Men</Box>
      <Box border={"2px solid red"}  w={"50%"} m={"auto"} color={"red"}>Women</Box>
    </HStack>
    </Box>
 </Box>
 {/* filtartion Part Here */}
 <Container maxW={"container.lg"} border={"2px solid red"}>
 <Box>
  <HStack spacing={"80%"}>
    <Box  fontSize={{base:"2xl",md:"4xl"}} >{<FcFilledFilter />}</Box>    
    <Box>
    <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
      </Box>    

  </HStack>
 </Box>
 </Container >
    <Container maxW={"container.xlg"}>
         <SimpleGrid columns={{base:2,md:4}} mt={2} mb={2} spacing={{base:"8",md:""}}>
         {data && data.length>0 ? data.map((el)=>{
      return    <ProductAddToCart />
         }):"Loading Data"}
         
         </SimpleGrid>
    </Container>
    
        {/* Footer Part Here  */}
       <Footer />
    </div>
  )
}
