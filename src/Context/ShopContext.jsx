import React, { createContext, useState } from 'react';
import all_product from '../assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = { quantity: 0, size: null };
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId, size, quantity = 1) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: {
                quantity: prev[itemId].quantity + quantity,
                size: size || prev[itemId].size,
            },
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: {
                ...prev[itemId],
                quantity: prev[itemId].quantity > 0 ? prev[itemId].quantity - 1 : 0,
            },
        }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId].quantity > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(itemId));
                totalAmount += itemInfo.new_price * cartItems[itemId].quantity;
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const itemId in cartItems) {
            totalItems += cartItems[itemId].quantity;
        }
        return totalItems;
    };

    const contextValue = {
        getTotalCartAmount,
        getTotalCartItems,
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
