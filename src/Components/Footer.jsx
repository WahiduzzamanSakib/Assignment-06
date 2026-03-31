import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-blue-950'>
            <div className=' grid grid-cols-2 md:grid-cols-5 gap-4 w-11/12 mx-auto p-10 '>

                <div>
                    <h2 className='text-2xl font-bold hover:text-blue-600 text-white'>DigiTools</h2>
                    <p className='text-gray-500'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>

                <div className='text-gray-500'>
                    <p className='font-bold text-white'>Product</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Templates</p>
                    <p>Integrations</p>
                </div>

                <div className='text-gray-500'>
                    <p className='font-bold text-white'>Company</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Press</p>
                </div>

                <div className='text-gray-500'>
                    <p className='font-bold text-white'>Resources</p>
                    <p>Documentation</p>
                    <p>Help Center</p>
                    <p>Community</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h2 className='text-white'>Social Links</h2>
                    <div className='text-white flex gap-5 mt-3'>
                        <FaInstagram />
                        <FaFacebook />
                        <FaXTwitter />
                    </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto p-3 text-gray-500'>
                <hr />
                <div className='flex justify-between'>

                    <span>© 2026 Digitools. All rights reserved.</span>
                    <span className='flex gap-6'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service </p>
                        <p>Cookies</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;