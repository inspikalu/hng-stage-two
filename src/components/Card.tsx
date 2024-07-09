import React, { useContext, useState } from 'react'

import { MyContext } from '../CartContext';


interface ICardProps {
    cardData: {
        id: string;
        img: string;
        itemTitle: string;
        price: string;
        description: string;
    };
    isInCart?: boolean

}
const Card: React.FC<ICardProps> = function (props) {
    const [numberCount, setNumberCount] = useState(0)
    const { cartItems, setCartItems } = useContext(MyContext)

    const handleAddToCart = () => {
        const newItems = Array(numberCount).fill(props.cardData);
        setCartItems([...cartItems, ...newItems]);
        console.log(cartItems, cartItems.length < 0);
        setNumberCount(0)
    };
    const handleRemoveFromCart = () => {
        const updatedCartItems = cartItems.filter(item => item.id !== props.cardData.id);
        setCartItems(updatedCartItems);
    };

    return (
        <div className='flex flex-col p-3 border-2 border-gray-400 rounded-md max-w-xs'>
            <div className='bg-white w-full h-52 overflow-hidden flex items-center justify-center'>
                <img src={`/images/${props.cardData.img}`} alt={props.cardData.itemTitle} className='h-full object-cover' />
            </div>
            <div className='flex flex-col'>
                <h2>{props.cardData.itemTitle}</h2>
                <span className='text-pink-500 font-bold'>{props.cardData.price}</span>
                <span>{props.cardData.description}</span>
                <div className='flex items-center justify-between gap-2'>
                    {props.isInCart ? (<button onClick={handleRemoveFromCart} className='bg-red-600 text-white rounded-md p-2'>Remove from cart</button>) : (<button onClick={handleAddToCart} className='bg-customBlue text-white rounded-md p-2'>Add to cart</button>)}

                    <div className='flex items-center justify-center gap-2'>
                        <button className='bg-blue-500 text-white text-2xl rounded-full w-7 h-7 flex items-center justify-center' onClick={() => setNumberCount(numberCount - 1)}>-</button>
                        <span>{numberCount}</span>
                        <button className='bg-blue-500 text-white text-2xl rounded-full w-7 h-7 flex items-center justify-center' onClick={() => setNumberCount(numberCount + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
    // return (
    //     <>
    //         <div className='flex flex-col p-3 border-2 border-gray-400 rounded-md max-w-[15rem]'>
    //             <div className='bg-black w-full h-[13rem] overflow-hidden flex items-start justify-center'>
    //                 <img src={`/images/${props.cardData.img}`} alt={props.cardData.img} className='w-full h-auto object-cover' />
    //             </div>
    //             <div className='flex flex-col'>
    //                 <h2>{props.cardData.itemTitle}</h2>
    //                 <span className='text-[#FF69B4] font-bold'>{props.cardData.price} </span>
    //                 <span>{props.cardData.description} </span>
    //                 <div className='flex items-center justify-between'>
    //                     <button onClick={handleAddToCart} className='bg-customBlue text-white rounded-md p-2'>Add to cart</button>

    //                     <div className='flex items-center justify-center gap-2'>
    //                         <button className='bg-customBlue text-white text-2xl rounded-[50%] w-7 h-7 flex items-center justify-center' onClick={()=>setNumberCount(numberCount-1)}>-</button>
    //                         <span>{numberCount}</span>
    //                         <button className='bg-customBlue text-white text-2xl rounded-[50%] w-7 h-7 flex items-center justify-center' onClick={()=>setNumberCount(numberCount+1)}>+</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
}

export default Card
