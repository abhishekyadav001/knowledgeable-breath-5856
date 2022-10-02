import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { FaQuoteLeft } from "react-icons/fa";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
export function Testimonials() {
  return (
    <Stack paddingBottom={"10"}>
      <ParallaxBanner style={{ aspectRatio: "1 / 1", width: "100%", height: "500px" }}>
        <ParallaxBannerLayer
          image="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png?v=1613764249"
          speed={50}
        />
        <ParallaxBannerLayer>
          <VStack>
            <Stack position={"relative"}>
              <Box width={"100%"}>
                <Heading
                  mb={"40px"}
                  mt={"40px"}
                  fontWeight="normal"
                  paddingBottom={"10px"}
                  borderBottom={"2px double #e5b95f"}
                >
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
                interval={2000}
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
                    I love each and every Fab Bag that I receive each month past three years. I am so much in love with
                    fab bags and all the lovely products and cute little pouches that I get. I love Fab Bag.
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
                    I've been a regular Fab Bag subscriber for many years now and I must say that the Fab Bag team comes
                    up with something or the other as a special attraction in the bag every month. As always, thank you
                    Fab Bag for making my day with this bag!!!
                  </Text>
                  <footer style={{ marginTop: "15px" }}>
                    <Text opacity={"70%"} fontSize={"small"}>
                      - Poonam
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
                    I like the fact that they offer high-quality products. Every single product from the bag stands out.
                    It is a MUST TRY for every girl out there.
                  </Text>
                  <footer style={{ marginTop: "15px" }}>
                    <Text opacity={"70%"} fontSize={"small"}>
                      -Shikha
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
                    I am highly impressed with the idea of surprising the customers by leaving them to guess, whats
                    inside the Bag. Surprises brings excitement and I am always excited to receive my Fab Bag. First of
                    all I should say that the Bags are awesome and each time I got my Fab Bag, I was really happy to
                    find whats inside it. Really satisfied! :)
                  </Text>
                  <footer style={{ marginTop: "15px" }}>
                    <Text opacity={"70%"} fontSize={"small"}>
                      -Pratika
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
                    This is my second month and I am already addicted. Can't wait for my third bag. It feels like
                    someone with so much love who loves pampering you. Thank you Fab bag. Amazing products Thank you
                    with gratitude.
                  </Text>
                  <footer style={{ marginTop: "15px" }}>
                    <Text opacity={"70%"} fontSize={"small"}>
                      -Kirthana
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
                    Who doesn't want to get pampered? And this bag is all you need when you want to show some extra love
                    to yourself. Every other product is of the best quality. And top of it doesn't burn a hole in your
                    pocket. Every month I just wait for my bag as a small kid waits for her favourite toy. This Fab Bag
                    is an upright bliss.
                  </Text>
                  <footer style={{ marginTop: "15px" }}>
                    <Text opacity={"70%"} fontSize={"small"}>
                      -Anushree
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
                    I am getting addicted to Fab Bag's. The first one I had ordered was simply to check it out as my
                    friend had recommended. I am not someone who spends a lot of time thinking about beauty products and
                    I am clueless when it comes to such matters. Which is why the Fab Bag's are perfect for me. This
                    August Fab Bag had everything I needed! The product curation is perfect. It's like having my own
                    personal shopper for beauty products and such pretty bags too.
                  </Text>
                  <footer style={{ marginTop: "15px" }}>
                    <Text opacity={"70%"} fontSize={"small"}>
                      -Saileena
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
                    The products are amazing and I am just in love with the bag! Kudos to you team!
                  </Text>
                  <footer style={{ marginTop: "15px" }}>
                    <Text opacity={"70%"} fontSize={"small"}>
                      -Niranjana
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
