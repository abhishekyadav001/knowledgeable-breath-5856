import { Box, Button, Heading,Stack, Text, VStack } from "@chakra-ui/react";

export default function Subscritption() {
  return (
    <VStack width={"100%"}  >
      <Stack position={"relative"}>
        <Box width={"100%"}>
          <Heading size={"xl"} mb={"70px"} paddingBottom={"10px"} borderBottom={"2px double #e5b95f"}>
            SUBSCRIPTION
          </Heading>
        </Box>
      </Stack>  
      <Stack width={"60%"} alignItems={"flex-start"}>
        <Box justifyContent={"flex-start"} textAlign={"center"}     >
          <Box width={"100%"}  padding={"22px"} border={"1px solid #dfe4e6"}>
            <Text fontSize={"xl"} as={"b"}>
              1 MONTH
            </Text>
            <Text fontSize={"x-small"}>SUBSCRIPTION</Text>
          </Box>
          <Box width={"100%"} padding={"22px"}  border={"1px solid #dfe4e6"}>
            <Text fontSize={"xl"} as={"b"}>
              RS. 599.00
            </Text>
            <Text fontSize={"x-small"}>/per month</Text>
          </Box>
          <Box width={"100%"} padding={"70px"} alignItems={"flex-start"} border={"1px solid #dfe4e6"}>
            <Text fontSize={"xl"} color={"yellow.500"} as={"b"}>
              ONE TIME PAYMENT
            </Text>
            <Text fontSize={"x-small"}>RS. 599.00</Text>
          </Box>
          <Box bg={"yellow.500"} alignItems={"center"}  border={"1px solid #dfe4e6"} padding={"10px"}>
            <Button bg={"yellow.500"} color={"white"} width={"100%"} border={"1px"}>
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Stack>
    </VStack>
  );
}
