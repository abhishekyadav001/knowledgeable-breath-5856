import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { CgHeart, CgProfile, CgShoppingCart } from "react-icons/cg";
export default function Navbar() {
  return (
    <Stack mr="4" ml="4" mt="4" fontWeight="bold" textAlign="center">
        <Flex  minWidth="max-content" alignItems="center" justifyContent="space-between" gap="2" >
        <Box>
          <Text fontSize='md' colorScheme="yellow">SUBSCRIBE NOW</Text>
        </Box>
        <Box>
          <Image
            height="40px"
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/FABBAG-LOGO_ea6e4404-93c0-4f54-9efc-23e6960bf4d4_2048x.png?v=1662004919"
            alt="Name"
          />
        </Box>
        <Box>
        <Flex  minWidth="max-content" alignItems="center" justifyContent="space-between" gap="4" >
            <SearchIcon color="yellow"></SearchIcon>
            <CgHeart color="yellow"></CgHeart>
            <CgProfile color="yellow"></CgProfile>
            <CgShoppingCart color="yellow"></CgShoppingCart>
          </Flex>
        </Box>
    </Flex>
    </Stack>
  );
}
