import React from "react";

const Workflow = () => {
    return (
        <section className="px-5 py-16">
            <div
                className="
          relative overflow-hidden bg-gradient-to-br from-[#5b35b4] to-[#7c4dff]
          rounded-3xl text-center p-10 md:p-16 shadow-2xl"
            >
                {/* Decorative circles */}
                <div className=" absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>


                <div className="relative z-10 max-w-3xl mx-auto space-y-5">

                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                        Ready to Transform Your Workflow?
                    </h2>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                        Join thousands of professionals who are already using Digitools
                        to work smarter.
                        <br className="hidden md:block" />
                        Start your free trial today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <button
                            className=" px-8 py-3 rounded-full bg-white text-[#5b35b4] font-semibold hover:scale-105 transition shadow-lg"
                        >
                            Explore Products
                        </button>
                        <button
                            className="px-8 py-3 rounded-full border border-white/40 bg-white/10
                text-white font-semibold hover:bg-white hover:text-[#5b35b4] transition
                          ">
                            View Pricing
                        </button>
                    </div>
                    <p className=" text-gray-200 text-sm pt-4">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Workflow;