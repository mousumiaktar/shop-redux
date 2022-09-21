import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const amount = useSelector((state)=>state.cart.amount)
    return (
        <>
            <nav>
                <div className='nav-center' style={{display:"flex", justifyContent:"space-around"}}>
                    <h3>redux toolkit</h3>
                    <div className='nav-container' style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <AiOutlineShoppingCart />
                        <div className='amount-container'>
                            <p className='total-amount'>{amount}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;