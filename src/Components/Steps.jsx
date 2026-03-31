import React from 'react';
import userImg from "../assets/user.png"
import packageImg from "../assets/package.png"
import rocketImg from "../assets/rocket.png"

const Steps = () => {
    return (
        <div className='my-10 bg-base-200 p-6'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className=' grid md:grid-cols-3 grid-cols-1 w-10/12 md:max-w-10/12 mx-auto gap-3 my-10'>

                <div className='relative bg-gray-100 rounded-md p-10'>
                    <p className="badge badge-primary rounded-full absolute top-3 right-4">
                        01
                    </p>
                    <div className='flex flex-col items-center space-y-3'>
                        <img className='bg-gray-200 rounded-full p-3 cursor-pointer' src={userImg} alt="" />
                        <h2 className='text-2xl font-bold'>Create Account</h2>
                        <p className='text-gray-500'>Sign up for free in seconds. No credit card<br />required to get started.</p>
                    </div>
                </div>
                <div className='relative bg-gray-100 rounded-md p-6 md:p-10'>
                    <p className="badge badge-primary rounded-full absolute top-3 right-4">
                        02
                    </p>
                    <div className='flex flex-col items-center space-y-3'>
                        <img className='bg-gray-200 rounded-full p-3 cursor-pointer' src={packageImg} alt="Choose Products" />
                        <h2 className='text-2xl font-bold'>Choose Products</h2>
                        <p className='text-gray-500'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>
                </div>
                <div className='relative bg-gray-100 rounded-md p-10'>
                    <p className="badge badge-primary rounded-full absolute top-3 right-4">
                        01
                    </p>
                    <div className='flex flex-col items-center space-y-3'>
                        <img className='bg-gray-200 rounded-full p-3 w-18 cursor-pointer' src={rocketImg} alt="Start Creating" />
                        <h2 className='text-2xl font-bold'>Start Creating</h2>
                        <p className='text-gray-500'>Download and start using your premium <br /> tools immediately.</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Steps;