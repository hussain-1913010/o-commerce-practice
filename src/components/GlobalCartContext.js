import React, { createContext, useEffect, useReducer } from 'react';
import { useAlert } from 'react-alert';
import {reducer} from './reducer';

export const CartContext = createContext();

const GlobalCartContext = (props) => {


    const initialState = {
        products: [],
        totalPrice: 0,
        totalItem: 0,
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);

    const alert = useAlert();

    const buyNow = (id, product) => {
        alert.success('Product added to cart. Go to cart for checkout');
        return dispatch({
            type: "BUY_NOW",
            id: id,
            product: product,
        })
        
    }

    const decrement = (id, product) => {
        return dispatch({
            type: 'DECREMENT',
            id,
            product,
        })
    }

    const clearCart = () => {
        alert.error('Deleted All Products');
        return dispatch({
            type: 'CLEAR_ALL',
        })
    }

    useEffect(() => {
        dispatch({
            type: "GET_TOTAL",
        });
    }, [state.products]);



    
    return (
        <div>
            {/* <CartContext.Provider value={{...state, dispatch}}> */}
            <CartContext.Provider value={{...state, dispatch, buyNow, decrement,clearCart}}>
                {props.children}
            </CartContext.Provider>
        </div>
    );
};

export default GlobalCartContext;