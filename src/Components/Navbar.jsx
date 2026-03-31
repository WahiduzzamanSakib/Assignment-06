import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm sticky top-1 z-50'>
            <div className="navbar  md:max-w-10/12 mx-auto">
                <div className="navbar-start">
                    <a className="font-bold text-3xl text-blue-800 cursor-pointer hover:bg-blue-200">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex lg: gap-[15px]">
                    <p><a>Products</a></p>
                    <p><a>Features</a></p>
                    <p><a>Pricing</a></p>
                    <p><a>Testimonials</a></p>
                    <p><a>FAQ</a></p>
                </div>
                <div className="navbar-end flex gap-5">
                        <div className="relative">
                            <FaShoppingCart size={28}/>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                2
                            </span>
                        </div>
                    <p className='hidden md:flex'>Login</p>
                    <button className='btn btn-active btn-primary rounded-full grident border-none'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;