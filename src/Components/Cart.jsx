import React from 'react';
import {toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const handlePay = () => {
        setCarts([])
        toast.success("Payment Succesful");
    }

    const handleClick = (item) => {
        const filteredArray = carts.filter((c) => c.id !== item.id);
        setCarts(filteredArray);
       toast.error("Successfully Removed")
    }
    return (
        <div className='bg-base-300 p-3 rounded-md'>
            <p className='text-xl font-bold my-2'>Your Cart</p>

            {carts.length === 0 ? (
                <p className="text-center text-2xl text-gray-500 py-5 font-bold">
                    No cart available
                </p>
            ) : (
                <div className="flex flex-col gap-4">
                    {carts.map(item => (
                        <div key={item.id} className='bg-base-200 flex justify-between items-center p-3 shadow-md rounded-lg'>
                            <div className='flex gap-3 justify-center items-center'>
                                <div>
                                    <p className="text-2xl">{item.icon}</p>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold'>{item.name}</p>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                            <h3 className='btn text-red-600 bg-red-200' onClick={() => handleClick(item)}>remove</h3>
                        </div>
                    ))}

                    <div className='flex justify-between p-4 shadow-md rounded-lg'>
                        <h2 className='font-bold'>Total: </h2>
                        <h3 className='font-bold'>
                            ${carts.reduce((total, item) => total + item.price, 0).toFixed(2)}
                        </h3>
                    </div>

                    <button onClick={handlePay} className='btn btn-primary'>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;