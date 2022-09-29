
import { Stack } from '@chakra-ui/react';
import Bagscomponents from '../Homecomponents/Bagscomponents';
import Subscritption from '../Homecomponents/Subscription';
import Topbanner from '../Homecomponents/Topbanner';
export default function Home(){

    return (
     <Stack>
    <Topbanner/>
    <Bagscomponents/>
    <Subscritption/>
     </Stack>
    )
}