import { useState } from "react";
import CheckoutPage from "./CheckoutPage";

const Navbar = ({cart}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [showCart, setShowCart] = useState(false)

    return ( 
        <nav className="container flex justify-between items-center mx-auto md:border-b-2 p-6 relative">
            {/* LEFT */}
            <div className="flex items-center space-x-12">
                <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <img src="images/icon-menu.svg" alt="Menu" />
                </button>
                {/* MOBILE NAV */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white fixed inset-0 z-50">
                        <div className="flex flex-col items-center space-y-8 py-24">
                            <div>Collections</div>
                            <div>Men</div>
                            <div>Women</div>
                            <div>About</div>
                            <div>Contact</div>
                        </div>
                    </div>
                )}

                <img src="images/logo.svg" alt="" />
                <div className="hidden md:flex space-x-12">
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">Collections</div>
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">Men</div>
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">Women</div>
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">About</div>
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">Contact</div>
                </div>
            </div>
            {/* RIGHT */}
            <div class="flex items-center space-x-8 cursor-pointer border-2" onClick={() => setShowCart(!showCart)}>
                <div class="relative">
                    <img src="images/icon-cart.svg" alt="Shopping cart" />
                    {/* badge */}
                    <div class="bg-red-500 text-xs text-white rounded-full w-5 h-5 inline-flex items-center justify-center absolute top-0 right-0 -mt-3 -mr-3">{cart}</div>
                </div>
                <img class="w-10" src="images/image-avatar.png" alt="" />
            </div>

            {showCart && (
                <div className="hidden md:flex items-center justify-center bg-white shadow-xl rounded-xl absolute top-full right-0 w-80 h-60">
                    {cart === 0 ? <div>Cart is empty</div> : <div className="flex flex-col">Shoe x {cart}: ${cart*25} <button className="inline-flex items-center justify-center bg-orange-400 w-full rounded-md text-white font-bold py-3">Check Out</button></div>}
                </div>
            )}
            {/* mobile */}
            {showCart && (
                <div className="md:hidden flex z-50 items-center justify-center bg-white shadow-xl rounded-xl absolute top-full left-1/2 transform -translate-x-1/2 w-full h-80 mt-2 px-12">
                    {cart === 0 ? <div>Cart is empty</div> : <div className="flex flex-col">Shoe x {cart}: ${cart*25} <button className="inline-flex items-center justify-center bg-orange-400 w-full rounded-md text-white font-bold py-3">Check Out</button></div>}
                </div>
            )}
        </nav>
     );
}
 
export default Navbar;