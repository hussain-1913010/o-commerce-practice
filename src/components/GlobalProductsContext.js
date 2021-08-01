import React, { createContext, useState } from 'react';
import Product from './Product';
import {products} from './products';


export const ProductContext = createContext()
const GlobalProductsContext = (props) => {
    const [allProducts, setAllProducts] = useState(products)
    return (
        <div>
            <ProductContext.Provider value={{allProducts: [...allProducts]}}>
                {/* <Product/> */}
                {props.children}
            </ProductContext.Provider>
        </div>
    );
};

export default GlobalProductsContext;