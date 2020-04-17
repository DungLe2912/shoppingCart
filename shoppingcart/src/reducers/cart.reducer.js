import * as types from '../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

var findIndex = (id, products) => {

    var result = -1;
    products.forEach((product, index) => {
        if (product.product.id === id) {
            result = index;
        }
    });
    return result;
}
const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            var { product, quantity } = action;
            //    console.log(product);
            var index = findIndex(product.id, state);
            console.log(index);
            if (index === -1) {
                var newProduct = {
                    product: {
                        id: product.id,
                        name: product.name,
                        image: product.image,
                        description: product.description,
                        price: product.price,
                        inventory: product.inventory,
                        ratting: product.ratting,
                    },
                    quantity: quantity
                };
                state.push(newProduct);
            } else {
                if (state[index].quantity < action.product.inventory) {
                    state[index] = {
                        ...state[index],
                        quantity: state[index].quantity + quantity
                    };
                }
                // console.log(state[index].quantity);
            }


            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.INCREASE_QUANTITY:
            
            var index = findIndex(action.product.product.id, state);
          
            if (index !== -1) {
                if (action.product.quantity < action.product.product.inventory) {
                    console.log('done');
                    state[index] = {
                        ...state[index],
                        quantity: state[index].quantity + 1
                    };
                }
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return [...state];
    }
}
export default cart;