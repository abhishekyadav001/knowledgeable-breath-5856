import { Box, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "infinite-react-carousel";
export default function Bagscomponents() {
  return (
    <Stack align="center" className="Stack-slider">
      <Box width="50%" marginTop="50px">
        <Heading as="h3" size="lg">
          WHAT'S IN THE BAG
        </Heading>
        <Divider variant="solid" h="10px" colorScheme="blue"></Divider>
      </Box>

      <Stack className="slider-container" marginTop="50px" width="100%">
        <Slider initialSlide={true} slidesPerRow={4} dotsScroll={1} slidesToShow={1} dots>
          <Box  border="10px" >
            <Image
              src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-1_3_2048x.png?v=1661970505"
              alt="image 1"
            />
            <Text fontSize="md">SUGAR Air Kiss Powder Lipstick of your choice*</Text>
          </Box>
          <Box>
            <Image
              src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_a24e9113-a52d-4385-bd35-c5aa92b69899_2048x.png?v=1662355952"
              alt="image 2"
            />
            <Text fontSize="md">SUGAR AIR KISS POWDER LIPSTICK OF YOUR CHOICE*</Text>
          </Box>
          <Box>
            <Image
              src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-3_49ef1dc2-4ef7-4475-9476-151c4e147e9b_2048x.png?v=1662552889"
              alt="image 3"
            />
            <Text fontSize="md">Plum Tea Tree Dandruff Control Shampoo Mini</Text>
          </Box>
          <Box>
            <Image
              src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-4_6276b47d-351a-43d8-8a89-eaaec543d3c6_2048x.png?v=1662728551"
              alt="image 4"
            />
            <Text fontSize="md">Plum BodyLovin' Vanilla Vibes Body Oil Mini</Text>
          </Box>
          <Box>
            <Image
              src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-5_1_d88bc9f2-c411-40dd-bfb8-7882d4e5c38f_2048x.png?v=1661970752"
              alt="image 5"
            />
            <Text fontSize="md">Bonus*</Text>
          </Box>
        </Slider>
      </Stack>
    </Stack>
  );
}
