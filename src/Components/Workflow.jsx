import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-[#5b35b4] my-5 space-y-3 text-center items-center p-20'>
            <h2 className='text-2xl font-bold text-white'>Ready to Transform Your Workflow?</h2>
            <p className='text-gray-400'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            <div>
                <button className='btn rounded-full text-[#5b35b4] border-none'>Explore Products</button>
                <button className='btn rounded-full bg-[#5b35b4] text-white ml-5'>View Pricing</button>
            </div>
            <p className='text-gray-400'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;