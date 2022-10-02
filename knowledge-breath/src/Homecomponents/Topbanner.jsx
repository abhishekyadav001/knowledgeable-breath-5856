import { Carousel } from "react-responsive-carousel";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Stack } from "@chakra-ui/react";

export default function Topbanner() {
  return (
    <Stack mt={"67px"}>
      <Carousel
        width={"100%"}
        dynamicHeight={"100%"}
        showThumbs={false}
        autoPlay={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        interval={1500}
      >
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Thank-you_2048x.png?v=1663908835" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Makeup-Reveal--2_30a28cb4-977f-4525-a2c6-e585fc2d3f99_2048x.png?v=1662355920" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Makeup-Reveal--1_2048x.png?v=1661970340" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Entire-Home-Page-Banner-Recovered_2048x.png?v=1663933703" />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Makeup-Reveal--2_30a28cb4-977f-4525-a2c6-e585fc2d3f99_2048x.png?v=1662355920"
            alt="magic"
          />
        </div>
      </Carousel>
    </Stack>
  );
}
