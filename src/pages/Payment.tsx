import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MyContext } from '../CartContext';

const Payment: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const help = useContext(MyContext)
    useEffect(
        function () {
            setTimeout(() => { setLoading(false); help.setCartItems([]) }, 3000)
        }, []
    )
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <div className="absolute top-4 left-4">
                <Link to={"/"} className="text-black text-2xl">
                    ←
                </Link>
            </div>
            <h1 className="text-2xl font-bold mb-4">Payment</h1>

            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-blue-500" />
                </div>) : (
                <>
                    <div className="flex items-center justify-center w-24 h-24 rounded-full border-2 border-blue-500 mb-4">
                        <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-blue-500" />
                    </div>
                    <h2 className="text-xl font-semibold">Payment Successfully</h2>
                </>)
            }
        </div>
    );
};

export default Payment;
