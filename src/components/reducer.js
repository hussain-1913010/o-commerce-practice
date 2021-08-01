export const reducer = (state, action) => {
    const {products, totalPrice, totalItem} = state;
    let product;
    let updatedPrice;
    let updatedItem;

    if(action.type === 'BUY_NOW'){
        const check = products.find(prod => prod.id === action.id);
        if (check) {
            // return state;
            const updateCart = products.map((curr) => {
                if (curr.id === action.id) {
                    // product = action.product;
                    
                    updatedItem = totalItem + 1;
                    return {...curr, quantity: curr.quantity + 1, totalItem: updatedItem}
                }
                return curr;
            })
            return {products: [...updateCart], totalItem: updatedItem}

        } else{
            // console.log('add to cart btn clicked');
            product = action.product;
            updatedItem = totalItem + 1;
            // console.log(product);
            return {products: [product, ...products], totalItem: updatedItem}
        }
    } 


    if(action.type === 'DELETE_ITEM'){
        console.log('delete clicked');

        const filtered = products.filter(product => product.id !== action.id);
        product = action.product;
        updatedItem = totalItem - product.quantity;
        return {products: [...filtered], totalItem: updatedItem}

        // return {
        //     ...state, products: state.item.filter((current) => {
        //         return current.id !== action.id;
        //     })
        // }

        // product = action.product;
        // products.filter((product) => {
        //     return product.id !== action.id;
        // })
        // return {products: [product, ...products]}

    }
    if(action.type === 'INCREMENT'){
        console.log('increment clicked');
        const updateCart = products.map((curr) => {
            if (curr.id === action.id) {
                updatedItem = totalItem + 1;
                return {...curr, quantity: curr.quantity + 1, totalItem: updatedItem}
                
            }
            return curr;
        })
        return {products: [...updateCart], totalItem: updatedItem}
    }


    if(action.type === 'DECREMENT'){
        console.log('decrement clicked');
        const updateCart = products.map((curr) => {
            if (curr.id === action.id) {
                updatedItem = totalItem - 1;
                return {...curr, quantity: curr.quantity - 1, totalItem: updatedItem}
            }
            return curr;
        }).filter((curr) => curr.quantity !== 0);
        return {products: [...updateCart], totalItem: updatedItem}
    }

    if (action.type === 'CLEAR_ALL') {
        console.log('delete all clicked')
        return {products: [], totalItem: 0, totalPrice: 0}
    }

    if (action.type === 'GET_TOTAL') {
        let {totalPrice} = state.products.reduce((accumulator, current) => {
            let {price, quantity} = current;
            let updateTotalPrice = price * quantity;
            accumulator.totalPrice += updateTotalPrice;
            return accumulator;
        }, {totalPrice: 0});
        return {...state, totalItem, totalPrice}
    }

    return state
}