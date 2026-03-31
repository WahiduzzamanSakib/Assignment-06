import React from 'react';

const Priceing = () => {
    return (
        <div>
            <div className='text-center my-5 space-y-2'>
                <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
                <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 md:max-w-10/12 mx-auto  shadow-sm space-x-4 my-8 gap-6">
                <div className="card-body bg-gray-200  rounded-md">
                    <h2 className="text-xl font-bold">Starter</h2>
                    <p className='text-gray-700'>Perfect for getting started</p>
                    <p><span className="text-3xl font-bold">$0</span>/month</p>

                    <ul className="mt-6 flex flex-col gap-2 text-xs text-gray-700">

                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to 10 free tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Basic templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>1 project per month</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block rounded-full grident border-none">Get Started Free</button>
                    </div>
                </div>
                <div className="card-body bg-[#5b35b4] rounded-md relative">

                    <p className="badge bg-amber-200 rounded-full absolute -top-3 md:right-35 right-45">
                        Most Popular
                    </p>
                    <span className='absulate'></span>
                    <h2 className="text-xl font-bold text-white">Pro</h2>
                    <p className='text-white'>Best for professionals</p>
                    <p className='text-white'><span className="text-3xl font-bold ">$29</span>/month</p>

                    <ul className="mt-6 flex flex-col gap-2 text-xs text-white">

                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to all premium tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Priority support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Cloud sync</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Advanced analytics</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn bg-base-200 btn-block rounded-full hover:bg-gray-300">Start Pro Trial</button>
                    </div>
                </div>
                <div className="card-body bg-gray-200 rounded-md">
                    <h2 className="text-xl font-bold">Enterprise</h2>
                    <p className='text-gray-700'>For teams and businesses</p>
                    <p><span className="text-3xl font-bold">$99</span>/month</p>

                    <ul className="mt-6 flex flex-col gap-2 text-xs text-gray-700">

                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Everything in Pro</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Team collaboration</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom integrations</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Dedicated support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>SLA guarantee</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom branding</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary btn-block grident rounded-full border-none">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Priceing;