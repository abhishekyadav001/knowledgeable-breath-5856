import { Box, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

export default function Prevbagcomp() {
  return (
    <VStack width={"100%"}>
      <Stack>
        <Box margin={"auto"} mb="10" w={"100%"}>
          <Heading size={"xl"} mb="10" paddingBottom={"10px"} borderBottom={"2px double #e5b95f"}>
            PREVIOUS BAGS
          </Heading>
        </Box>
      </Stack>
      <HStack opacity={"67%"} width={"80%"}>
        <Box paddingLeft={"10px"} paddingRight={"10px"} textAlign="left">
          <Image
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3opt_large.gif?v=1661148586"
            alt="img 1"
          />
          <Text pt={"2.5"}  fontSize={"md"}>Aug'22 The Own 8 All Fab Bag</Text>
          <Text paddingTop={2} paddingBottom={5} fontSize={"lg"}color={"#999999"}>Rs. 599.00</Text>
        </Box>
        <Box paddingLeft={"10px"} paddingRight={"10px"} textAlign="left">
          <Image
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-1_large.gif?v=1656064858"
            alt="img 1"
          />
          <Text pt={"2.5"}  fontSize={"md"}>Aug'22 The Own 8 All Fab Bag</Text>
          <Text paddingTop={2} paddingBottom={5} fontSize={"lg"}color={"#999999"}>Rs. 599.00</Text>
        </Box>
        <Box paddingLeft={"10px"} paddingRight={"10px"} textAlign="left">
          <Image
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_large.gif?v=1655088937"
            alt="img 1"
          />
          <Text pt={"2.5"}  fontSize={"md"}>Aug'22 The Own 8 All Fab Bag</Text>
          <Text paddingTop={2} paddingBottom={5} fontSize={"lg"}color={"#999999"}> <i>from</i> Rs. 599.00</Text>
        </Box>
        <Box paddingLeft={"10px"} paddingRight={"10px"} textAlign="left">
          <Image
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS_large.gif?v=1652238042"
            alt="img 1"
          />
          <Text pt={"2.5"}  fontSize={"md"}>Aug'22 The Own 8 All Fab Bag</Text>
          <Text paddingTop={2} paddingBottom={5} fontSize={"lg"}color={"#999999"}> <i>from</i> Rs. 599.00</Text>
        </Box>
      </HStack>
    </VStack>
  );
}
