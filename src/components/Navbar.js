import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='nav-center' style={{display:"flex", justifyContent:"space-around"}}>
                    <h3>redux toolkit</h3>
                    <div className='nav-container' style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <AiOutlineShoppingCart />
                        <div className='amount-container'>
                            <p className='total-amount'>0</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;