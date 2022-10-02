import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { CgHeart, CgProfile, CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Stack
      fontWeight="bold"
      textAlign="center"
      position="fixed"
      top="0px"
      bgColor={"white"}
      paddingTop={"10px"}
      zIndex={"100"}
      width={"100%"}
    >
      <Flex minWidth="max-content" alignItems="center" justifyContent="space-between" gap="2">
        <Link to={"https://www.fabbag.com/products/subscribe"}>
          <Box>
            <Text pl={"5"} fontSize="md" colorScheme="yellow">
              SUBSCRIBE NOW
            </Text>
          </Box>
        </Link>
        <Link to={"/"}>
          <Box>
            <Image
              height="50px"
              src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_ea6e4404-93c0-4f54-9efc-23e6960bf4d4_2048x.png?v=1662004919"
              alt="Name"
            />
          </Box>
        </Link>
        <Box pr={"5"} >
          <Flex minWidth="max-content" alignItems="center"  justifyContent="space-between" gap="4">
            <SearchIcon  color="yellow"></SearchIcon>
            <Link to={"/wishlists"}>
              <CgHeart  color="yellow"></CgHeart>
            </Link>
            <Link to={"/cart"}>
              <CgProfile  w={"20px"} h={"20px"} color="yellow"></CgProfile>
            </Link>
            <Link to={"/checkout"}>
              <CgShoppingCart  w={"20px"} h={"20px"} color="yellow"></CgShoppingCart>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
}
