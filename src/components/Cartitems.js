import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cartitems = ({ id, img, title, price, amount }) => {
    return (
        <article className='cart-item' >
            <div>
                <img style={{ height: "50px" }} src={img} alt={title} />
            </div>

            <div className='item-detail'>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button>remove</button>
            </div>

            <div className='counter'>
                <AiOutlinePlus />
                <p>{amount}</p>
                <AiOutlineMinus />
            </div>
        </article>
    );
};

export default Cartitems;