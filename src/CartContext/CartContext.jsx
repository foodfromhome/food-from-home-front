import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const CartContext = createContext();

// Провайдер для корзины
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (dish) => {
        setCart((prevCart) => [...prevCart, dish]);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((dish) => dish.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Хук для использования контекста корзины
export const useCart = () => {
    return useContext(CartContext);
};
