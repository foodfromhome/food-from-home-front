import React from 'react';
import styles from "./CartItem.module.css"
const CartItem = ({ item }) => {
    return (
        <div className={styles.cart__item}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
        </div>
    );
};

export default CartItem;
