
import { Stack } from '@chakra-ui/react';
import Bagscomponents from '../Homecomponents/Bagscomponents';
import Prevbagcomp from '../Homecomponents/Prevbagcomp';
import Subscritption from '../Homecomponents/Subscription';
import Topbanner from '../Homecomponents/Topbanner';
export default function Home(){

    return (
     <Stack>
    <Topbanner/>
    <Bagscomponents/>
    <Subscritption/>
    <Prevbagcomp/>
     </Stack>
    )
}