import React, { useContext } from 'react';
import { CartContext } from './GlobalCartContext';
import './cart.css';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';

const Cart = () => {

    const { products, dispatch, decrement, totalPrice, totalItem, clearCart } = useContext(CartContext)
    // alert(products)


    const increment = (id, product) => {
        return dispatch({
            type: 'INCREMENT',
            id,
            product,
        })
    }
    // const decrement = (id) => {

    // }
    // const removeItem = (id) => {

    // }

    const alert = useAlert();
    const checkout = () => {
        alert.info('checkout is not available right now');
    }

    return (
        <div className='container'>
            {/* <h1>This is from cart</h1> */}
            {/* {products.length} */}
            <div className="cart__upper_ext">
                <Link to='/' className='continue__shopping'><h3 className=""><i class="fas fa-arrow-left"></i> Continue Shopping</h3></Link>
                <h5 className=''>Total items in cart: <span className="item__span"> {totalItem}</span> </h5>
            </div>

            {
                products.map((product) => {
                    const { id, title, description, price, img, quantity } = product;
                    return (
                        <div key={id}>
                            <div className="items-info">
                                <div className="product-img">
                                    <img src={img} alt="product img" />
                                </div>
                                <div className="title">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                                <div className="add-minus-quantity">
                                    <i className="fas fa-minus minus" onClick={() => decrement(id, product)}></i>
                                    <input type="text" placeholder={quantity} />
                                    <i className="fas fa-plus add" onClick={() => increment(id, product)}></i>
                                </div>
                                <div className="price">
                                    <h4>{price * quantity} TK</h4>
                                </div>
                                <div className="remove-item">
                                    <i className="fas fa-trash-alt remove" onClick={() => dispatch({ type: 'DELETE_ITEM', id: id, product: product })}></i>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })

            }
            <div className="cart-total">
                <h3>Cart total amount: <span>{totalPrice} </span> TK</h3>
                <button className='btn btn-primary m-2' onClick={checkout}>Checkout</button>
                <button className="clear-cart btn btn-danger m-2" onClick={clearCart}>Clear Cart</button>
            </div>


        </div>
    );
};

export default Cart;