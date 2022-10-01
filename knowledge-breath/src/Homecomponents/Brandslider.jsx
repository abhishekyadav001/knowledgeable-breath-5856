import { Box, HStack, Image, Slide, Stack, VStack } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
const imgData = [
  { src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/sugar_1_160x160.jpg?v=1613764249" },
  {
    src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Plum_Logo_For_Olive_and_Macadamia_Hair_Spa_Kit_160x160.png?v=1625063052",
  },
  { src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Tru_hair_logo_160x160.png?v=1625063080" },
  { src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/WOC_Beauty_Logo_160x160.jpg?v=1614325483" },
  { src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Baiser_India_Logo_160x160.jpg?v=1625063066" },
  {
    src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/6256280-43d286588b4beafb0e4a423acf72a620-medium_jpg_5e3480ef-0e7a-4aea-88d0-c48379ad9837_160x160.jpg?v=1614324296",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/brick-new-york-with-symbol-white_46f7f93d-9ac3-4a6b-8827-7341564c001c_160x160.png?v=1614324236",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/palmers-logo_33a73358-5f3d-4cd4-ac8c-ecf89a2c72b2_160x160.jpg?v=1614323590",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/LLW1vAyf_400x400_36a490d2-defb-4c90-898d-2af5215e8433_160x160.jpg?v=1614301650",
  },
  { src: "https://cdn.shopify.com/s/files/1/0052/7551/6995/files/719h_SoVZLL._SX466_160x160.jpg?v=1614319690" },
];

export default function Brandslider() {
  const [state, setState] = useState(false);
  useEffect(() => {}, [state]);
  var settings = {

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    pauseOnHover: true,
  };
  return (
    <Stack bg={"#e5b95f"} justifyContent={"center"} height={"200"}  width={"100%"}> 
    <Stack margin={"auto"} width={"70%"} justifyContent={"center"}>
        <Slider {...settings} >
     
          {imgData.map((el, i) => {
                    return (
                        <Box  pt={"10"} pb={"20px"}    justifyContent={"center"} >
                            <Image  src={el.src} alt={`img`}/>
                        </Box>
                    );
                })}
    
        </Slider>
        </Stack>
    </Stack>
  );
}
