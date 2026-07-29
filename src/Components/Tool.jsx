import React, { useState } from "react";
import { toast } from "react-toastify";

const Tool = ({ tool, carts, setCarts }) => {

    const [isBuy, setBuy] = useState(false);

    const handleClick = () => {
        const isFind = carts.find(item => item.id === tool.id);

        if (isFind) {
            toast.error("Already Added");
            return;
        }

        setCarts([...carts, tool]);
        setBuy(true);
        toast.success("Added to cart");
    };


    const tagStyle = {
        popular: "bg-red-100 text-red-600",
        new: "bg-green-100 text-green-600",
        "best seller": "bg-yellow-100 text-yellow-600",
    };


    return (
        <div
            className="group bg-white rounded-3xl shadow-md
            hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div
                    className=" text-4xl bg-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center">
                    {tool.icon}
                </div>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${tagStyle[tool.tag]}
                    `}
                >
                    {tool.tag}
                </span>
            </div>

            {/* Content */}
            <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                    {tool.name}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed">
                    {tool.description}
                </p>

                <div className="pt-3">
                    <span className="text-4xl font-extrabold text-purple-700">
                        ${tool.price}
                    </span>
                    <span className="text-gray-500">
                        /month
                    </span>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                    {tool.features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-3"
                        >
                            <span
                                className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold"
                            >
                                ✓
                            </span>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* Button */}
                <button
                    onClick={handleClick}
                    className={`mt-8 w-full py-3 rounded-full font-semibold transition-all duration-300
                    ${isBuy ? "bg-purple-900 text-white hover:bg-purple-800" : "bg-purple-600 text-white hover:bg-purple-700"
                        }`}
                >
                    {isBuy ? "Checkout" : "Buy Now"}
                </button>
            </div>
        </div>
    );
};

export default Tool;