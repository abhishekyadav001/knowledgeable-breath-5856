import { Stack } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Bagscomponents from "../Homecomponents/Bagscomponents";
import Brandslider from "../Homecomponents/Brandslider";
import Prevbagcomp from "../Homecomponents/Prevbagcomp";
import Subscritption from "../Homecomponents/Subscription";
import { Testimonials } from "../Homecomponents/Testimonials";
import Topbanner from "../Homecomponents/Topbanner";
import Trendingnow from "../Homecomponents/Trendingnow";
export default function Home() {
  return (
    <Stack>
      <Topbanner />
      <Bagscomponents />
      <Subscritption />
      <Prevbagcomp />
      <Testimonials />
      <Trendingnow />
      <Brandslider />
    </Stack>
  );
}
