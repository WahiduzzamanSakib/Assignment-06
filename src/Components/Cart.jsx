import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {

    const handlePay = () => {
        setCarts([]);
        toast.success("Payment Successful");
    };

    const handleRemove = (item) => {
        const updatedCart = carts.filter(
            cart => cart.id !== item.id
        );
        setCarts(updatedCart);
        toast.error("Item Removed");
    };

    const totalPrice = carts
        .reduce((total, item) => total + item.price, 0)
        .toFixed(2);
    return (
        <div className="bg-gray-50 rounded-3xl p-6 shadow-lg">

            <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Your Cart
            </h2>
            {
                carts.length === 0 ? (
                    <div className="text-center py-10">
                        <div className="text-5xl mb-3">🛒</div>

                        <p className="text-xl font-semibold text-gray-500">
                            Your cart is empty
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            Add some tools to continue
                        </p>
                    </div>
                ) : (
                    <div className="space-y-5">

                        {/* Cart Items */}
                        <div className="space-y-3">
                            {
                                carts.map(item => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-3xl">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">
                                                    {item.name}
                                                </h3>
                                                <p className="text-purple-600 font-semibold">
                                                    ${item.price}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleRemove(item)}
                                            className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm
                                             hover:bg-red-600 hover:text-white transition"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                        </div>

                        {/* Total */}
                        <div className="bg-white rounded-2xl p-5 flex justify-between items-center shadow-sm">

                            <h3 className="text-lg font-bold">Total</h3>
                            <p className="text-2xl font-extrabold text-purple-600">${totalPrice}</p>
                        </div>

                        {/* Checkout Button */}
                        <button
                            onClick={handlePay}
                            className="w-full py-3 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 
                            transition shadow-lg"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
        </div>
 )};


export default Cart;