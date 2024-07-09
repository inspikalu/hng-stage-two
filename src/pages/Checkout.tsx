import React, { useContext } from 'react';
import Card from '../components/Card';
import { MyContext } from '../CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Checkout: React.FC = () => {
    const { cartItems } = useContext(MyContext)


    const items = cartItems.map(function (item) {
        return (
            <div key={item.id} className=''>
                <Card cardData={item} isInCart={true} />
            </div>
        )
    })

    const getItems = function (items: any[]) {
        let total = 0;
        items.forEach(item => {
            if (item?.price) {
                console.log(item.price);
                // Assuming price is a string and needs to be parsed as a number
                console.log()
                total += parseFloat(item.price.substring(1));
            }
        });
        console.log(total)
        return total;
    };

    const total = getItems(cartItems);

    return (<>
        <div className='p-5'>
            <div className='flex flex-wrap gap-4 mt-5'>
                {items}
            </div>
            <div className='mt-5 p-5 bg-white shadow-md rounded-md'>
                <div className='flex justify-between items-center'>
                    <span>Items</span>
                    <span className='text-red-500'>${total.toFixed(2)}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Shipping</span>
                    <span className='text-red-500'>$1.00</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Tax</span>
                    <span className='text-red-500'>$0.00</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Total</span>
                    <span className='text-red-500'>${(total + 1).toFixed(2)}</span>
                </div>
            </div>
        </div>
        <div className="w-full">
            <form className="space-y-4 flex flex-wrap gap-2 justify-center md:justify-between my-4 p-3 items-center md:items-start">
                <div className='flex flex-col p-4'>
                    <h2>Billing Information</h2>
                    <p>Please provide accurate billing address to help us serve you better</p>
                    <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                            State
                        </label>
                        <select
                            id="state"
                            name="state"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option>Kwara</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Full Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="mt-1 block w-full pl-3 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            placeholder="Unilorin road"
                        />
                    </div>

                    <div>
                        <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">
                            Select Pickup Station
                        </label>
                        <select
                            id="pickup"
                            name="pickup"
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            <option>Item7</option>
                            {/* Add other options here */}
                        </select>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className="">
                        <h3 className="text-lg font-medium text-gray-900">Payment method</h3>
                        <div className="flex items-center mt-4">
                            <input
                                id="mastercard"
                                name="payment-method"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="mastercard" className="ml-3 block text-sm font-medium text-gray-700">
                                Master card
                            </label>
                        </div>
                        <div className="flex items-center mt-4">
                            <input
                                id="verve"
                                name="payment-method"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="verve" className="ml-3 block text-sm font-medium text-gray-700">
                                Verve
                            </label>
                        </div>
                        <div className="flex items-center mt-4">
                            <input
                                id="visa"
                                name="payment-method"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="visa" className="ml-3 block text-sm font-medium text-gray-700">
                                VISA
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name on card
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full pl-3 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            placeholder="Young John"
                        />
                    </div>

                    <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            className="mt-1 block w-full pl-3 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            placeholder="4272 4265 6731 8765"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                className="mt-1 block w-full pl-3 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                placeholder="MM/YY"
                            />
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                className="mt-1 block w-full pl-3 pr-3 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                placeholder="091"
                            />
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center">
                            <input
                                id="pay"
                                name="payment-method"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="pay" className="ml-3 block text-sm font-medium text-gray-700">
                                Pay
                            </label>
                        </div>
                        <div className="flex items-center mt-4">
                            <input
                                id="cod"
                                name="payment-method"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">
                                Cash On Delivery
                            </label>
                        </div>
                        <div className="flex items-center mt-4">
                            <input
                                id="other"
                                name="payment-method"
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="other" className="ml-3 block text-sm font-medium text-gray-700">
                                Other Payment Method
                            </label>
                        </div>
                    </div>

                    <Link to="/payment">
                        <button type="submit" className="cursor-pointer w-full mt-6 bg-blue-500 text-white p-2 rounded-md flex items-center justify-center gap-2">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Place order
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    </>
    );
};

export default Checkout;


