import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../CartContext'
import Card from '../components/Card'

const Cart: React.FC = function () {
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
    return (
        <>
            <section className='w-full p-5'>
                <h2 className='text-2xl font-bold'>Cart Summary</h2>
                {cartItems.length <= 0 ? <div className='w-full text-center my-4'>Why so empty</div> : (<div className='flex flex-col'>
                    <div className='text-md font-bold my-3'>Total: ${total.toFixed(2)}</div>
                    <div className='flex flex-wrap w-full gap-5 my-3'>{items}</div>
                    <Link to="/checkout" className='w-full'><button className='w-full bg-customBlue text-white p-3 rounded-md cursor-pointer'>Check out(${total.toFixed(2)})</button></Link>
                </div>)}
            </section>
        </>
    )
}

export default Cart
