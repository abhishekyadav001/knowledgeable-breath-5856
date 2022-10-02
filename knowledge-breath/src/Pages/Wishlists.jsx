import { Box, Divider, Heading, Image, ListItem, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Wishlists() {
  return (
    <Stack justifyContent={"center"} margin={"auto"}>
      <Stack
        margin={"auto"}
        width={"70%"}
        mt={"200"}
        justifyContent={"space-between"}
        textAlign={"left"}
        flexDirection={"row"}
        borderBottom={"black 1px solid"}
      >
        <VStack width={"50%"} pl={"10"} alignItems={"flex-start"}>
          <Text mb={"5"} fontSize={"30px"} as={"h3"} alignContent={"flex-start"}>
            Ooops!
          </Text>
          <Text mb={"20px"} fontSize={"25px"} as={"h4"}>
            We can't seem to find the page you're looking for.
          </Text>
          <Text color={"#555"}>Error code: 404</Text>
          <Text>Here are some helpful links instead:</Text>
          <UnorderedList pl={"10"}>
           <Link to={"/"}> <ListItem>Home</ListItem></Link>
            <ListItem>About</ListItem>
            <ListItem>Contact us</ListItem>
            <ListItem>Subscribe Now</ListItem>
          </UnorderedList>
        </VStack>
        <Stack>
          <Image src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69_large.gif?v=1548941346" />
        </Stack>
      </Stack>
    </Stack>
  );
}
