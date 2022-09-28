
import  { Routes ,Route } from "react-router-dom"
import Cart from "../Pages/Cart"
import Checkout from "../Pages/Checkout"
import Home from "../Pages/Home"
import Wishlists from "../Pages/Wishlists"

export default function Allroutes(){
return (

    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/wishlists" element={<Wishlists/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
    </Routes>

)
}