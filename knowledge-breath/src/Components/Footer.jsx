    import { Button, Heading, HStack, Input, ListItem, Stack, Text, VStack } from "@chakra-ui/react";

    export default function Footer() {
    return (
        <VStack height={"400px"} mt={'100'} style={{boxShadow:"0px 3px 14px #7d7d7d"}}>
        <HStack paddingTop={"75"} width={"60%"} textAlign={"left"} alignItems={"flex-start"} justifyContent={"space-between"}>
        <VStack>
            <Heading  as={"h5"} fontSize={"16"} paddingBottom={"10px"}  listStyleType={"none"}>INFORMATION</Heading>
            <ul style={{lineHeight:"30px",listStyleType:"none",font:"16px"}} >
            <li color="#7d7d7d">About Us</li>
            <li color="#7d7d7d">Associated Brands</li>
            <li color="#7d7d7d">FAQ</li>
            <li color="#7d7d7d">Collabrate with Fab Bag</li>
            <li color="#7d7d7d">Contact us</li>
            <li color="#7d7d7d">Returns & Refunds</li>
            <li color="#7d7d7d">Terms & Conditions</li>
            <li color="#7d7d7d">Privacy Policy</li>
            </ul>
        </VStack>
        <VStack>
            <Heading as={"header"} fontSize={"16"} paddingBottom={"10px"}  listStyleType={"none"}>CUSTOMER CARE</Heading>
            <Heading as={"h5"} fontSize={"small"}><span>Call</span> : 022-6505-6010</Heading>
            <Heading as={"h5"} fontSize={"small"}>(Moday to Friday:9 AM - 7PM)</Heading>
            <Heading as={"h5"} fontSize={"small"}>Mail:crew@fabbag.com</Heading>
        </VStack>
        <VStack  textAlign={"left"}>
            <Heading pl={"0"} as={"h6"} fontSize={"16"}>NEWSLETTER</Heading>
                <Text mb={"10"} fontSize={"sm"}>Signup for the latest offers, updates and news</Text>
                <HStack mt={"10"}>
                    <Input type={"email"} placeholder={"Your email address"}/>
                    <Button background={"yellow.500"} pr={"10"} pl={"10"} textAlign={"center"} fontSize={"small"} color={"white"} _hover={{color:"black",bgColor:"red"}}>SUBSCRIBE</Button>
                </HStack>
                <Text fontSize={"sm"}>
                Don’t worry we don’t spam
                </Text>
        </VStack>
        </HStack>
        <VStack>
            <HStack>
                <Text>Copyright © 2021 fabbag.com All rights reserved.</Text>
            </HStack>
        </VStack>
        </VStack>
    );
    }
