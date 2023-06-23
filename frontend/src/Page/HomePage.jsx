import React from 'react'
import  Navbar  from '../component/Navbar'
import  Footer  from '../component/Footer'

import { Box, Container, IconButton, Image, SimpleGrid, Text, useBreakpointValue } from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

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

   // These are the images used in the slide
   const cards = [
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  ];
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
  <Box>
    <Text textAlign={"center"} mt={"3"} color={"black.800"} fontSize={{base:"xl",md:"2xl"}} fontWeight={"bold"}>
    Unleash your style with our fashion-forward threads.
    </Text>
    <Container maxW={"container.lg"}>
         <SimpleGrid columns={{base:1,md:2}} mt={2} mb={2}>
          <Box>
            <Image src='https://plus.unsplash.com/premium_photo-1673757106029-143813394e70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' w="80%" h={{base:"-webkit-fit-content",md:"xl"}}
             />
          </Box>
          <Box m={"auto"}>
            <Text fontSize={{base:"xl",md:"2xl"}}>About</Text>
            <Text fontSize={{base:"xl",md:"2xl"}}>
            Discover the perfect blend of style, affordability, and quality at Sega Clothes. Embrace fashion without breaking the bank as our curated collection offers trendy apparel that suits every budget. Elevate your wardrobe with our high-quality clothing, designed to make you look and feel confident. Shop now and redefine your fashion game with Sega Clothes.
            </Text>
          </Box>

         </SimpleGrid>
         <SimpleGrid columns={{base:1,md:2}} mt={2} mb={2}>
          <Box>
            <Image src='https://plus.unsplash.com/premium_photo-1673757106029-143813394e70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' w="80%" h={{base:"-webkit-fit-content",md:"xl"}}
             />
          </Box>
          <Box m={"auto"}>
            <Text fontSize={{base:"xl",md:"2xl"}}>About</Text>
            <Text fontSize={{base:"xl",md:"2xl"}}>
            Discover the perfect blend of style, affordability, and quality at Sega Clothes. Embrace fashion without breaking the bank as our curated collection offers trendy apparel that suits every budget. Elevate your wardrobe with our high-quality clothing, designed to make you look and feel confident. Shop now and redefine your fashion game with Sega Clothes.
            </Text>
          </Box>

         </SimpleGrid>
         <SimpleGrid columns={{base:1,md:2}} mt={2} mb={2}>
          <Box>
            <Image src='https://plus.unsplash.com/premium_photo-1673757106029-143813394e70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' w="80%" h={{base:"-webkit-fit-content",md:"xl"}}
             />
          </Box>
          <Box m={"auto"}>
            <Text fontSize={{base:"xl",md:"2xl"}}>About</Text>
            <Text fontSize={{base:"xl",md:"2xl"}}>
            Discover the perfect blend of style, affordability, and quality at Sega Clothes. Embrace fashion without breaking the bank as our curated collection offers trendy apparel that suits every budget. Elevate your wardrobe with our high-quality clothing, designed to make you look and feel confident. Shop now and redefine your fashion game with Sega Clothes.
            </Text>
          </Box>

         </SimpleGrid>
    </Container>
  </Box>
        {/* Footer Part Here  */}
       <Footer />
    </div>
  )
}
