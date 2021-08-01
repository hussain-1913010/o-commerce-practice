import React, { useContext } from 'react';
import { CartContext } from './GlobalCartContext';
import { ProductContext } from './GlobalProductsContext';
import Slider from './Slider';

const Product = () => {
    const { allProducts } = useContext(ProductContext);
    // console.log(allProducts[0].title)
    const {dispatch, buyNow} = useContext(CartContext);
    // console.log(data);
    return (
        <div>
            <Slider/>
            <div className="container">
                <h2 className="text-center my-3">Our Products</h2>
                <div className="row">
                    {
                        allProducts.map((product) => {
                            return (
                                <div className="col-md-3 col-sm-6 col-12 mt-3" key={product.id}>
                                    <div className="card shadow">
                                        <img src={product.img} className="card-img-top img-fluid product_img" alt="Error" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <h5>${product.price}</h5>
                                            <button className="buy_now_btn" onClick={() => buyNow(product.id, product)}>BUY NOW</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;