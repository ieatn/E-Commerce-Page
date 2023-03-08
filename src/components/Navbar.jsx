import { useState } from "react";

const Navbar = ({counter}) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return ( 
        <nav className="container flex justify-between items-center mx-auto md:border-b-2 p-6">
            {/* LEFT */}
            <div className="flex items-center space-x-12">
                <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <img src="images/icon-menu.svg" alt="Menu" />
                </button>
                {/* MOBILE NAV */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-gray-50 fixed inset-0 z-50">
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
                    <div>Collections</div>
                    <div>Men</div>
                    <div>Women</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>
            </div>
            {/* RIGHT */}
            <div className="flex items-center space-x-8">
                <div class="relative">
                    <img src="images/icon-cart.svg" alt="Shopping cart" />
                    <div class="bg-red-500 text-xs text-white rounded-full w-5 h-5 inline-flex items-center justify-center absolute top-0 right-0 -mt-3 -mr-3">{counter}</div>
                </div>
                <img className="w-10" src="images/image-avatar.png" alt="" />
            </div>
        </nav>
     );
}
 
export default Navbar;