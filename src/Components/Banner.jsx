import React from 'react';
import bannerImg from "../assets/banner.png";
import iconImg from "../assets/icon.png";
import playImg from "../assets/Play.png";

const Banner = () => {
    return (
        <div className="bg-white w-10/12 min-h-screen mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-12">
            
            
            <div className="flex-1">
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="rounded-2xl shadow-2xl md:max-w-md w-full"
                />
            </div>


            <div className="flex-1 flex flex-col items-start text-left">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                    <img src={iconImg} alt="icon" className="w-4 h-4" />
                    <span className="text-blue-600 text-sm font-medium">
                        New: AI-Powered Tools Available
                    </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-bold">
                    Supercharge Your <br />
                    Digital Workflow
                </h1>

                <p className="py-6 text-gray-500">
                    Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>

                <div className="flex gap-4">
                    <button className='btn btn-active btn-primary rounded-full hover:bg-blue-500 border-none'>
                        Explore Products
                    </button>
                    <button className="btn btn-outline border-blue-600 gap-2 rounded-full">
                        <img src={playImg} alt="Watch Demo" />
                        Watch Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;