import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { FaQuoteLeft } from "react-icons/fa";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
export function Testimonials() {
  return (
    <Stack paddingBottom={"1000"} >
    <ParallaxBanner style={{ aspectRatio: '1 / 1',width:"100%", height:"500px" } }>
  <ParallaxBannerLayer image="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png?v=1613764249" speed={50} />
  <ParallaxBannerLayer>
  <VStack>
      <Stack  position={"relative"}>
        <Box width={"100%"}>
          <Heading mb={"40px"} mt={"40px"} fontWeight="normal" paddingBottom={"10px"} borderBottom={"2px double #e5b95f"}>
            TESTIMONIALS
          </Heading>
        </Box>
      </Stack>
      <VStack w={"60%"} margin={"auto"} position={"relative"}>
        <Carousel
          width={"100%"}
          showThumbs={false}
          autoPlay={true}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          interval={1000}
        >
          <VStack textAlign={"center"} alignItems="center">
            <Heading size={"xl"} mb={"39px"}>
              <FaQuoteLeft />
            </Heading>
            <Text
              color={"blackAlpha.900"}
              fontWeight="normal"
              lineHeight={"30px"}
              w="100%"
              marginTop={"40px"}
              fontSize={"md"}
            >
              I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab
              bags and all the lovely products and cute little pouches that I get. I love Fab Bag.
            </Text>
            <footer style={{ marginTop: "15px" }}>
              <Text opacity={"70%"} fontSize={"small"}>
                Munira-
              </Text>
            </footer>
          </VStack>
          <VStack textAlign={"center"} alignItems="center">
            <Heading size={"xl"} mb={"39px"}>
              <FaQuoteLeft />
            </Heading>
            <Text
              color={"blackAlpha.900"}
              fontWeight="normal"
              lineHeight={"30px"}
              w="100%"
              marginTop={"40px"}
              fontSize={"md"}
            >
              I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab
              bags and all the lovely products and cute little pouches that I get. I love Fab Bag.
            </Text>
            <footer style={{ marginTop: "15px" }}>
              <Text opacity={"70%"} fontSize={"small"}>
                Munira-
              </Text>
            </footer>
          </VStack>
          <VStack textAlign={"center"} alignItems="center">
            <Heading size={"xl"} mb={"39px"}>
              <FaQuoteLeft />
            </Heading>
            <Text
              color={"blackAlpha.900"}
              fontWeight="normal"
              lineHeight={"30px"}
              w="100%"
              marginTop={"40px"}
              fontSize={"md"}
            >
              I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab
              bags and all the lovely products and cute little pouches that I get. I love Fab Bag.
            </Text>
            <footer style={{ marginTop: "15px" }}>
              <Text opacity={"70%"} fontSize={"small"}>
                Munira-
              </Text>
            </footer>
          </VStack>
          <VStack textAlign={"center"} alignItems="center">
            <Heading size={"xl"} mb={"39px"}>
              <FaQuoteLeft />
            </Heading>
            <Text
              color={"blackAlpha.900"}
              fontWeight="normal"
              lineHeight={"30px"}
              w="100%"
              marginTop={"40px"}
              fontSize={"md"}
            >
              I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab
              bags and all the lovely products and cute little pouches that I get. I love Fab Bag.
            </Text>
            <footer style={{ marginTop: "15px" }}>
              <Text opacity={"70%"} fontSize={"small"}>
                Munira-
              </Text>
            </footer>
          </VStack>
          <VStack textAlign={"center"} alignItems="center">
            <Heading size={"xl"} mb={"39px"}>
              <FaQuoteLeft />
            </Heading>
            <Text
              color={"blackAlpha.900"}
              fontWeight="normal"
              lineHeight={"30px"}
              w="100%"
              marginTop={"40px"}
              fontSize={"md"}
            >
              I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab
              bags and all the lovely products and cute little pouches that I get. I love Fab Bag.
            </Text>
            <footer style={{ marginTop: "15px" }}>
              <Text opacity={"70%"} fontSize={"small"}>
                Munira-
              </Text>
            </footer>
          </VStack>
        </Carousel>
      </VStack>
    </VStack>
  </ParallaxBannerLayer>
</ParallaxBanner>
</Stack>
  );
}
