import { useContext, useState } from 'react'

import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';


const Navbar = () => {

    const { cart, setCart } = useContext(CartContext);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [showCart, setShowCart] = useState(false)

    const deleteCart = () => {
        setCart(0)
    }

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
                <Link to='/'><img src="images/logo.svg" alt="" /></Link>
                <div className="hidden md:flex space-x-12">
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">Collections</div>
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">Men</div>
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">Women</div>
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">About</div>
                    <div className="cursor-pointer transition duration-300 hover:text-gray-300">Contact</div>
                </div>
            </div>
            {/* RIGHT */}
            <div className="flex items-center space-x-8 cursor-pointer" onClick={() => setShowCart(!showCart)}>
                <div className="relative">
                    <img src="images/icon-cart.svg" alt="Shopping cart" />
                    {/* badge */}
                    <div className="bg-red-500 text-xs text-white rounded-full w-5 h-5 inline-flex items-center justify-center absolute top-0 right-0 -mt-3 -mr-3">{cart}</div>
                </div>
                <img className="w-10" src="images/image-avatar.png" alt="" />
            </div>


            {/* MOBILE MOBILE MOBILE */}
            {showCart && (
                <div className="md:hidden flex z-50 items-center justify-center bg-white shadow-xl rounded-xl absolute top-full left-0 w-full h-80 mt-2">
                    <div className="absolute top-0 left-0 border-b w-full p-4 font-bold">Cart</div>
                    {cart === 0 ? 
                        <div>Cart is empty</div> 
                        : 
                        <div className="flex flex-col w-full space-y-10 px-6 mt-10">
                            {/* TOP */}
                            <div className="flex justify-between items-center">
                                {/* LEFT */}
                                <img className="w-10" src="images/image-avatar.png" alt="" />
                                {/* MIDDLE */}
                                <div className="flex flex-col">
                                    <p>Fall Limited Edition Sneakers </p>
                                    <p>$125.00 x {cart} <span className="font-bold">${cart*125}</span></p>
                                </div>
                                {/* RIGHT */}
                                <img className='cursor-pointer' onClick={() => deleteCart()} src="images/icon-delete.svg" alt="" />
                            </div>
                            {/* BOTTOM */}
                            <Link to='/checkout'>
                                <button className="inline-flex items-center justify-center bg-orange-400 rounded-md text-white font-bold py-3 w-full">
                                    Check Out
                                </button>
                            </Link>
                        </div>
                    }
                </div>
            )}

            
            {/* DESKTOP */}
            {showCart && (
                <div className="hidden md:flex items-center justify-center bg-white shadow-xl rounded-xl absolute top-full right-0 w-80 h-60">
                    <div className="absolute top-0 left-0 border-b w-full p-4 font-bold">Cart</div>
                    {cart === 0 ? 
                        <div>Cart is empty</div> 
                        : 
                        <div className="flex flex-col w-full space-y-10 px-6 mt-10">
                            {/* TOP */}
                            <div className="flex justify-between items-center">
                                {/* LEFT */}
                                <img className="w-10" src="images/image-avatar.png" alt="" />
                                {/* MIDDLE */}
                                <div className="flex flex-col">
                                    <p>Fall Limited Edition Sneakers </p>
                                    <p>$125.00 x {cart} <span className="font-bold">${cart*125}</span></p>
                                </div>
                                {/* RIGHT */}
                                <img className='cursor-pointer' onClick={() => deleteCart()} src="images/icon-delete.svg" alt="" />

                            </div>
                            {/* BOTTOM */}
                            <Link to='/checkout'>
                                <button className="inline-flex items-center justify-center bg-orange-400 rounded-md text-white font-bold py-3 w-full">
                                    Check Out
                                </button>
                            </Link>
                        </div>
                    }
                </div>
            )}
            
        </nav>
     );
}
 
export default Navbar;