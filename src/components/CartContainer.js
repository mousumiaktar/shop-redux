import React from 'react';
import { useSelector } from 'react-redux';
import Cartitems from './Cartitems';

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((state) => state.cart)

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your Cart</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section>
            <div>
                <h2>your cart</h2>
            </div>
            <div>
        {cartItems.map((item) => {
          return <Cartitems key={item.id} {...item} />;
        })}
      </div>
        </section>
    );
};

export default CartContainer;