import React from 'react';

const Pointer = () => {
    return (
        <div className="bg-[#6f07f7] my-5">
            <div className='flex justify-around md:max-w-10/12 mx-auto p-8'>
                <div className='space-y-3'>
                    <p className='text-4xl font-bold text-white'>50K+</p>
                    <p className='text-gray-300'>Active Users</p>
                </div>
                
                    <div className="divider lg:divider-horizontal"></div>

                <div className='space-y-3'>
                    <p className='text-4xl font-bold text-white'>200+</p>
                    <p className='text-gray-300'>Premium Tools</p>
                </div>
                 <div className="divider lg:divider-horizontal"></div>
                <div className='space-y-3'>
                    <p className='text-4xl font-bold text-white'>4.9</p>
                    <p className='text-gray-300'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Pointer;